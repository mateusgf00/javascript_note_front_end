import Api from "./api";


const NotesService = {
    index: () => Api.get('/notes', {
        headers: {'access-token': localStorage.getItem('token')}
    }),
    create: () => Api.post('/notes',{'title': 'nova nota', 'body':'Nova nota...'}, {
        headers: {'access-token': localStorage.getItem('token')}
    }),
    delete: (id) => Api.delete(`/notes/${id}`, {
        headers: {'access-token': localStorage.getItem('token')}
    }),
    update: (id, params) => Api.put(`/notes/${id}`, params, {
        headers: {'access-token': localStorage.getItem('token')}
    })
}

export default NotesService;