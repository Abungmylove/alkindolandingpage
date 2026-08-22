export interface Product {
  id: string; 
  product_category: string;
  type_of_resin: string;
  alkindo_name: string;
  noarez_exp: string;
  noarez_lokal: string;
  solvent: string;
  tg: string;
  nv: string;
  viscosity: string;
  av_solution: string;
  color_app: string;
  performance_features: string;
  application: string;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: "acrylindo-1102-60",
    product_category: "Acrylic",
    type_of_resin: "Thermoplastic Acrylic",
    alkindo_name: "ACRYLINDO 1102-60",
    noarez_exp: "NOAREZ RA 1102",
    noarez_lokal: "NOAREZ RA 6213",
    solvent: "Toluene/n-Butanol",
    tg: "51",
    nv: "60 + 1",
    viscosity: "Z3 - Z5",
    av_solution: "< 3",
    color_app: "< 1 / C/C",
    performance_features: "Good adhesion, gloss, hardness, compatible with NC and short oil alkyd",
    application: "General metal coating"
  },
  {
    id: "acrylindo-1111-50x",
    product_category: "Acrylic",
    type_of_resin: "Thermoplastic Acrylic",
    alkindo_name: "ACRYLINDO 1111-50X",
    noarez_exp: "NOAREZ RA 1111",
    noarez_lokal: "NOAREZ RA 6222",
    solvent: "Xylene /Butyl cellosolve",
    tg: "45",
    nv: "50 + 2",
    viscosity: "Z5 - Z6",
    av_solution: "4-6",
    color_app: "< 1 / C/C",
    performance_features: "Good UV retention, good water resistance, color retention, hardness, adhesion, dust proof",
    application: "Roof coating"
  },
  {
    id: "acrylindo-1204-55",
    product_category: "Acrylic",
    type_of_resin: "Thermosetting Acrylic",
    alkindo_name: "ACRYLINDO 1204-55",
    noarez_exp: "NOAREZ RA 1204",
    noarez_lokal: "NOAREZ RA 6315",
    solvent: "Aromatic 150 / Butyl cellosolve",
    tg: "-",
    nv: "55 + 1",
    viscosity: "Z2 - Z4",
    av_solution: "33-37",
    color_app: "< 1 / C/C",
    performance_features: "Excellent storage stability, good adhesion to ink, good chemical and heat resistance, flexible, gloss",
    application: "White based can coating"
  },
  {
    id: "acrylindo-1311-50",
    product_category: "Acrylic",
    type_of_resin: "Acrylic polyol",
    alkindo_name: "ACRYLINDO 1311-50",
    noarez_exp: "NOAREZ RA 1311",
    noarez_lokal: "NOAREZ RA 6422",
    solvent: "Cellosolve acetate / n-Butyl acetate",
    tg: "199",
    nv: "50 + 1.5",
    viscosity: "W - Y",
    av_solution: "<= 5",
    color_app: "< 1 / C/C",
    performance_features: "Good yellowing and chemical resistance, good stain resistance, color retention",
    application: "Excellent PU coating for wood and heavy duty"
  },
  {
    id: "acrylindo-1424-50",
    product_category: "Acrylic",
    type_of_resin: "Modified Acrylic",
    alkindo_name: "ACRYLINDO 1424-50",
    noarez_exp: "NOAREZ RA 1424",
    noarez_lokal: "NOAREZ RA 6535",
    solvent: "Xylene",
    tg: "-",
    nv: "50 ± 1",
    viscosity: "U - Z",
    av_solution: "< 5",
    color_app: "< 4 / Slightly haze",
    performance_features: "Good hardness, good adhesion, fast dry, and flexible",
    application: "Metal coating"
  }
];

export async function fetchProductCatalog(): Promise<Product[]> {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  
  if (apiUrl) {
    try {
      const response = await fetch(`${apiUrl}/products`);
      if (!response.ok) {
        throw new Error("Failed to load product catalog from API");
      }
      const data = await response.json();
      return data.data ? data.data : data; 
    } catch (error) {
      console.error("Gagal mengambil data dari API, menggunakan mock data sementara:", error);
      return MOCK_PRODUCTS;
    }
  }

  return Promise.resolve(MOCK_PRODUCTS);
}

export async function fetchProductById(id: string): Promise<Product | null> {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  
  if (apiUrl) {
    try {
      const response = await fetch(`${apiUrl}/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to load product from API");
      }
      const data = await response.json();
      return data.data ? data.data : data;
    } catch (error) {
      console.error("Gagal mengambil detail produk dari API, menggunakan mock data:", error);
      const product = MOCK_PRODUCTS.find((item) => item.id === id);
      return Promise.resolve(product ?? null);
    }
  }

  const product = MOCK_PRODUCTS.find((item) => item.id === id);
  return Promise.resolve(product ?? null);
}

export async function fetchFilters(): Promise<{ categories: string[], resin_types: string[], solvents: string[] }> {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  if (apiUrl) {
    try {
      const response = await fetch(`${apiUrl}/filters`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error("Gagal mengambil filter dari API:", error);
    }
  }
  
  // Fallback to mock data if API fails or VITE_API_BASE_URL is undefined
  const types = Array.from(new Set(MOCK_PRODUCTS.map(p => p.type_of_resin).filter(Boolean)));
  const solvents = Array.from(new Set(MOCK_PRODUCTS.map(p => p.solvent).filter(Boolean)));
  return { categories: ["Acrylic", "Alkyd", "Amino", "Epoxy", "Melamine"], resin_types: types, solvents: solvents };
}
