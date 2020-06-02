const app = new Vue({
  el: '#search', 
  data: {
    findSong: [], 
    findArtist: '', 
    modal: false, 
    findLyrics: []
  },
  methods: {
    handleSubmit: function(){
      fetch('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track_artist='+this.findArtist+'&page_size=10&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=b423b10f9ea2ae8ac7a91deda0c4ffa7')
    .then(response => response.json())
    .then(findSongResponce => {
      this.findSong = findSongResponce.message.body.track_list; 
    });

    }, 
    modalAction: function(song) {
      if(this.modal == false){
        this.modal = true; 
        fetch('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id='+song+'&apikey=b423b10f9ea2ae8ac7a91deda0c4ffa7')
        .then(response => response.json())
        .then(findLyricsResponce => {
        this.findLyrics = findLyricsResponce.message.body.lyrics}) 
      } else {
        this.modal = false
      } 
    }
  }
}); 
