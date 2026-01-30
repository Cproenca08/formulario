
export const instance = axios.create({
    baseURL: 'http://localhost:3000',
  timeout: 5000
})

instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    localStorage.removeItem('token')
    localStorage.removeItem('login')
    try{
      await Swal.fire({
            title: 'Você não esta logado, ou sua sessão expirou\n'+
            'Faça seu login novmente!',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#5BBCB8',
            allowOutsideClick: false,
            allowEscapeKey: false
        })
    }catch(e){}
    window.location.href = "../../../login/login.html";
    return instance(error.config);
  }

  throw error;
});
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
 
);