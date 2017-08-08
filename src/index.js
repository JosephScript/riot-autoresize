export default function () {
  return {
    init: function () {
      let autoresize = e => {
        e.target.style.height = '1px'
        e.target.style.height = (e.target.scrollHeight) + 'px'
      }
      let select = () => {
        let autoresizers = this.root.querySelectorAll('textarea[autoresize]')

        for (let i = 0; i < autoresizers.length; i++) {
          autoresizers[i].style.height = (autoresizers[i].scrollHeight) + 'px'
          autoresizers[i].addEventListener('input', autoresize)
          autoresizers[i].addEventListener('blur', autoresize)
          autoresizers[i].addEventListener('focus', autoresize)
        }
      }
      this.on('mount', () => {
        select()
      })
      this.on('update', () => {
        select()
      })
      this.on('unmount', () => {
        let autoresizers = this.root.querySelectorAll('textarea[autoresize]')
        for (let i = 0; i < autoresizers.length; i++) {
          autoresizers[i].removeEventListener('input', autoresize)
          autoresizers[i].removeEventListener('blur', autoresize)
          autoresizers[i].removeEventListener('focus', autoresize)
        }
      })
    }
  }
}
