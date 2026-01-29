

export async function carregarXML() {
try {
const response = await axios.get('https://avatars.githubusercontent.com/u/253275162?s=400&v=4', {
responseType: 'blob'
});
const blobUrl = window.URL.createObjectURL(response.data);
        const imagemElemento = document.getElementById("imagemXML");
        if (imagemElemento) {
            imagemElemento.src = blobUrl;
        }
} catch (error) {
console.error('Error fetching blob:', error);
}
}

carregarXML();
