const 𓆉 = (𓃷, 𓆐) => (𓃷 > 𓆐 ? 1 : -1);

const 𓃰 = (𓃷, 𓆐) => (𓃷 > 𓆐 ? -1 : 1);

const 𓅮 = (𓅬, 𓅭 , 𓆏) => {
  return [...𓅬, ...𓅭 ].sort(𓆏 === "asc" ? 𓆉 : 𓃰);
};

module.exports = 𓅮;
