import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { fetchProductCatalog, fetchFilters, type Product } from "@/services/productService";
import { Search, Droplet, Layers, Beaker, Tag } from "lucide-react";



const ProductFinder = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedResinType, setSelectedResinType] = useState<string[]>([]);
  const [selectedSolvent, setSelectedSolvent] = useState<string[]>([]);
  const [availableFilters, setAvailableFilters] = useState<{ categories: string[], resin_types: string[], solvents: string[] }>({ categories: [], resin_types: [], solvents: [] });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadCatalog = async () => {
      setLoading(true);
      setLoadError(null);

      try {
        const [catalog, filters] = await Promise.all([
          fetchProductCatalog(),
          fetchFilters()
        ]);
        if (isMounted) {
          setProducts(catalog);
          setAvailableFilters(filters);
        }
      } catch (_error) {
        if (isMounted) {
          setLoadError("Gagal memuat katalog produk. Silakan coba lagi nanti.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadCatalog();

    return () => {
      isMounted = false;
    };
  }, []);

  const toggleFilter = (value: string, current: string[], setter: (items: string[]) => void) => {
    setter(current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
  };



  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        normalizedSearch === "" ||
        [
          product.alkindo_name,
          product.noarez_exp,
          product.noarez_lokal,
          product.application,
          product.performance_features,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesResinType =
        selectedResinType.length === 0 || selectedResinType.includes(product.product_category);
      
      const matchesSolvent =
        selectedSolvent.length === 0 || selectedSolvent.some(solv => product.solvent.includes(solv));

      return matchesSearch && matchesResinType && matchesSolvent;
    });
  }, [products, searchTerm, selectedResinType, selectedSolvent]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg text-center">
          <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-700" />
          <p className="text-lg font-semibold text-slate-900">Memuat katalog produk...</p>
          <p className="mt-2 text-sm text-slate-600">Sedang mengambil data resin dari service.</p>
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="rounded-3xl border border-rose-200 bg-white p-10 shadow-lg text-center">
          <p className="mb-4 text-2xl font-semibold text-rose-700">Gagal memuat produk</p>
          <p className="text-sm text-slate-600 mb-6">{loadError}</p>
          <Button variant="outline" onClick={() => window.location.reload()}>Muat Ulang</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="container mx-auto px-6 py-12">
        <section className="mb-10 rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Resin Database</p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900">Temukan Spesifikasi Resin</h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Telusuri katalog resin kami. Gunakan filter di sisi kiri untuk mempersempit pilihan berdasarkan jenis resin dan bahan pelarut.
            </p>
          </div>
        </section>

        <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Filter Produk</h2>
              <p className="text-sm text-slate-600">Pilih kategori untuk menyesuaikan pencarian.</p>
            </div>

            <div className="space-y-5">
              <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-900">Kategori Produk</h3>
                <div className="space-y-2">
                  {availableFilters.categories.map((type) => (
                    <label key={type} className="flex cursor-pointer items-center gap-3 rounded-2xl px-3 py-2 hover:bg-slate-100">
                      <input
                        type="checkbox"
                        checked={selectedResinType.includes(type)}
                        onChange={() => toggleFilter(type, selectedResinType, setSelectedResinType)}
                        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                      />
                      <span className="text-sm text-slate-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-900">Solvent</h3>
                <div className="space-y-2">
                  {availableFilters.solvents.map((solv) => (
                    <label key={solv} className="flex cursor-pointer items-center gap-3 rounded-2xl px-3 py-2 hover:bg-slate-100">
                      <input
                        type="checkbox"
                        checked={selectedSolvent.includes(solv)}
                        onChange={() => toggleFilter(solv, selectedSolvent, setSelectedSolvent)}
                        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                      />
                      <span className="text-sm text-slate-700">{solv}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <section className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Cari nama produk, aplikasi, atau fitur..."
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                <span>{products.length} produk tersedia</span>
                <span className="text-slate-400">•</span>
                <span>{filteredProducts.length} hasil sesuai filter</span>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
              {filteredProducts.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-xl font-semibold text-slate-900">Product not found</p>
                  <p className="mt-3 text-sm text-slate-600">Coba periksa kata kunci atau filter Anda.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                    >
                      <div className="border-b border-slate-100 bg-slate-50/50 p-6 flex flex-col gap-2">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                            <Layers size={12} /> {product.type_of_resin}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                            <Droplet size={12} /> {product.solvent}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">{product.alkindo_name}</h3>
                        <p className="text-sm font-medium text-slate-500">
                          Exp: {product.noarez_exp} &bull; Lokal: {product.noarez_lokal}
                        </p>
                      </div>

                      <div className="p-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                            <p className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">Viscosity</p>
                            <p className="text-sm font-medium text-slate-900">{product.viscosity}</p>
                          </div>
                          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                            <p className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">NV (%)</p>
                            <p className="text-sm font-medium text-slate-900">{product.nv}</p>
                          </div>
                          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                            <p className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">Tg (°C)</p>
                            <p className="text-sm font-medium text-slate-900">{product.tg}</p>
                          </div>
                          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                            <p className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">AV Solution</p>
                            <p className="text-sm font-medium text-slate-900">{product.av_solution}</p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900">
                              <Beaker size={16} className="text-blue-700" /> Performance Features
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-600">
                              {product.performance_features}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900">
                              <Tag size={16} className="text-blue-700" /> Application
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-600">
                              {product.application}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductFinder;
