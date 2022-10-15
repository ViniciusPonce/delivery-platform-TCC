export default class Static{
    static token = localStorage.getItem('authorization');
    static tokenApi = {'token' : localStorage.getItem('authorization')};
}