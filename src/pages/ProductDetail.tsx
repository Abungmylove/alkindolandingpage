import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { fetchProductById, type Product } from "@/services/productService";
import { ArrowLeft, Download, Mail, Lock, FileText } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!productId) {
      setError("ID produk tidak ditemukan pada URL.");
      setLoading(false);
      return;
    }

    let isMounted = true;
    const loadProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const item = await fetchProductById(productId);
        if (!isMounted) return;

        if (!item) {
          setError("Produk tidak ditemukan.");
          setProduct(null);
        } else {
          setProduct(item);
        }
      } catch (_error) {
        if (!isMounted) return;
        setError("Terjadi kesalahan saat memuat detail produk.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProduct();

    return () => {
      isMounted = false;
    };
  }, [productId]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (_error) {
      // Clipboard mungkin tidak tersedia di semua browser.
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg text-center">
          <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900" />
          <p className="text-lg font-semibold text-slate-900">Memuat detail produk...</p>
          <p className="mt-2 text-sm text-slate-600">Silakan tunggu sementara kami mengambil data.</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-16">
        <div className="rounded-3xl border border-rose-200 bg-white p-10 shadow-lg text-center">
          <h1 className="mb-4 text-3xl font-bold text-rose-700">Produk Tidak Ditemukan</h1>
          <p className="mb-6 text-sm text-slate-600">{error ?? "Detail produk tidak tersedia saat ini."}</p>
          <Button onClick={() => navigate("/product-finder")}>Kembali ke Katalog</Button>
        </div>
      </div>
    );
  }

  const specs = [
    { label: "Regions", value: product.region ?? "–" },
    { label: "Product Group", value: product.productGroup ?? "–" },
    { label: "Application", value: product.application ?? "–" },
    { label: "Chemistry", value: product.chemistry ?? "–" },
    { label: "Technology", value: product.technology ?? "–" }
  ];

  const descriptionParagraphs = [
    product.description,
    "Formulasi ini dirancang untuk aplikasi industri berat yang memerlukan proteksi durabel dan kinerja tinggi dalam kondisi ekstrem.",
    "Solusi ini mendukung struktur baja, lantai pabrik, dan fasilitas offshore dengan standar teknis yang ketat dan jaminan performa jangka panjang."
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="space-y-10">
          <Button
            variant="ghost"
            onClick={() => navigate("/product-finder")}
            className="gap-2 text-slate-700 hover:text-slate-900"
          >
            <ArrowLeft size={16} /> Kembali ke Katalog
          </Button>

          <div className="grid gap-10 lg:grid-cols-[65%_35%]">
            <section className="rounded-[28px] border border-slate-200 bg-white p-10 shadow-sm">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tight text-slate-900">{product.name}</h1>
                  <div className="space-y-5 text-slate-700 text-base leading-relaxed">
                    {descriptionParagraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] bg-slate-50 p-8">
                  <h2 className="mb-6 text-2xl font-semibold text-slate-900">Technical Specifications</h2>
                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                    <table className="w-full border-separate border-spacing-0">
                      <tbody>
                        {specs.map((spec, index) => (
                          <tr key={spec.label} className={index < specs.length - 1 ? "border-b border-slate-200" : ""}>
                            <th className="w-1/3 px-6 py-5 text-left text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 align-top">
                              {spec.label}
                            </th>
                            <td className="px-6 py-5 text-sm font-medium text-slate-900 align-top">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <aside className="space-y-6">
              <div className="rounded-[28px] bg-slate-50 p-8 shadow-sm border border-slate-200 lg:sticky lg:top-24">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-slate-900">What would you like to do next?</h2>
                  <p className="text-sm text-slate-600">Pilih tindakan yang paling sesuai untuk mendapatkan sampel, SDS, atau bantuan tim kami.</p>
                </div>

                <Button
                  className="w-full rounded-3xl bg-blue-900 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 hover:bg-blue-800"
                  onClick={() => window.location.href = "mailto:sales@alkindo.com?subject=Request%20Sample"}
                >
                  REQUEST SAMPLE
                </Button>

                <div className="space-y-3 pt-4">
                  <button
                    className="flex w-full items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    onClick={handleCopyLink}
                  >
                    <Mail className="h-4 w-4 text-slate-500" />
                    Send product link
                  </button>
                  <button
                    className="flex w-full items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    onClick={() => window.location.href = "mailto:sales@alkindo.com?subject=Request%20SDS"}
                  >
                    <FileText className="h-4 w-4 text-slate-500" />
                    Request SDS
                  </button>
                  <button
                    className="flex w-full items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    onClick={() => navigate("/product-finder")}
                  >
                    <Lock className="h-4 w-4 text-slate-500" />
                    Contact our team
                  </button>
                </div>
              </div>

              <div className="rounded-[28px] bg-white p-8 shadow-sm border border-slate-200">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Download technical datasheets</h3>
                    <p className="text-sm text-slate-600">Pilih format dokumen yang dibutuhkan.</p>
                  </div>
                  <Download className="h-5 w-5 text-slate-500" />
                </div>

                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                    English - A4
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                    English - Letter
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                    Indonesian - A4
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
