import '../assets/styles/footer.styl'
export default {
    data() {
        return {
            author:"Dawson"
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Writter by {this.author}</span>
            </div>
        
        )
   
    }
}