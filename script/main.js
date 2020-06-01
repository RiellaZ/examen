const app = new Vue({
  el: '#find-song', 
  data: {
    findSongs: [], 
    songSearch: '', 
    modal2: false, 
    songLyrics: []
  },
  methods: {
    handleSubmit: function(){
      fetch('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track_artist='+this.songSearch+'&page_size=10&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=b423b10f9ea2ae8ac7a91deda0c4ffa7')
    .then(response => response.json())
    .then(findSongsResponce => {
      this.findSongs = findSongsResponce.message.body.track_list; 
    });

    }, 
    modalAction2: function(track) {
      if(this.modal2 == false){
        this.modal2 = true; 
        fetch('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id='+track+'&apikey=b423b10f9ea2ae8ac7a91deda0c4ffa7')
        .then(response => response.json())
        .then(songLyricsResponce => {
        this.songLyrics = songLyricsResponce.message.body.lyrics}) 
      } else {
        this.modal2 = false
      } 
    }
  }
}); 
