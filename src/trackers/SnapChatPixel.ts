export default class SnapChatPixel {
  constructor({ snapChatPixelID }: { snapChatPixelID: string }) {
    this.snapChatPixelID = snapChatPixelID
  }

  private _initialized = false

  public initialize() {
    const scriptID = 'snap-pixel'

    if (document.getElementById(scriptID) || this._initialized) {
      return
    }

    try {
      if (!this.snapChatPixelID) {
        throw new Error('No SnapChat Pixel ID was assigned')
      }

      const script = document.createElement('script')
      script.id = scriptID

      script.innerHTML = `(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function() {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};a.queue=[];var s='script';r=t.createElement(s);r.async=!0;r.src=n;var u=t.getElementsByTagName(s)[0];u.parentNode.insertBefore(r,u);})(window,document,'https://sc-static.net/scevent.min.js');snaptr('init', '${this.snapChatPixelID}', { 'user_email': '__INSERT_USER_EMAIL__' });snaptr('track', 'PAGE_VIEW');`

      document.head.appendChild(script)
      script.insertAdjacentHTML('beforebegin', '<!-- Snap Pixel Code -->')
      script.insertAdjacentHTML('afterend', '<!-- End Snap Pixel Code -->')
    } catch (err) {
      console.error(err)
    }
  }

  public snapChatPixelID: string
}
