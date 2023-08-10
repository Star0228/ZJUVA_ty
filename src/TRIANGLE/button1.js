import { useRef } from 'react';
import database from './200ver.json'
function Button1({app1,setApp1},app_name1){
    const inputref=useRef();
    function show(){
        app_name1=inputref.current.value
        let i1
        for(i1=0;i1<211;i1=i1+1){
            if(database[i1].App===app_name1){
                setApp1(database[i1])
                break
            }
        }
        console.log(app1)
    }
    return (
      <div>
        <input id="selector1" type='text' placeholder='请输入想要查找的软件' name="name1" list="app_list" ref={inputref}></input>
        <datalist id="app_list">
            <option>360 Security - Free Antivirus, Booster, Cleaner</option>
            <option>8 Ball Pool</option>
            <option>Adobe Acrobat Reader</option>
            <option>AliExpress - Smarter Shopping, Better Living</option>
            <option>Amazon Kindle</option>
            <option>Amazon Shopping</option>
            <option>Android Messages</option>
            <option>Android Messages</option>
            <option>Angry Birds 2</option>
            <option>Angry Birds Classic</option>
            <option>Angry Birds Rio</option>
            <option>Angry Birds Star Wars</option>
            <option>Anti-virus Dr.Web Light</option>
            <option>Applock</option>
            <option>APUS Launcher - Theme, Wallpaper, Hide Apps</option>
            <option>Asphalt 8: Airborne</option>
            <option>Audiobooks from Audible</option>
            <option>Automatic Call Recorder</option>
            <option>Avast Mobile Security 2018 - Antivirus & App Lock</option>
            <option>AVG AntiVirus 2018 for Android Security</option>
            <option>B612 - Beauty & Filter Camera</option>
            <option>Backgrounds HD (Wallpapers)</option>
            <option>Badoo - Free Chat & Dating App</option>
            <option>Banana Kong</option>
            <option>Battery Doctor-Battery Life Saver & Battery Cooler</option>
            <option>BBM - Free Calls & Messages</option>
            <option>BeautyPlus - Easy Photo Editor & Selfie Camera</option>
            <option>Bible</option>
            <option>BIGO LIVE - Live Stream</option>
            <option>Bike Race Free - Top Motorcycle Racing Games</option>
            <option>Bitmoji �?Your Personal Emoji</option>
            <option>Booking.com Travel Deals</option>
            <option>Bubble Witch 2 Saga</option>
            <option>Cache Cleaner-DU Speed Booster (booster & cleaner)</option>
            <option>Calculator</option>
            <option>Camera360: Selfie Photo Editor with Funny Sticker</option>
            <option>CamScanner - Phone PDF Creator</option>
            <option>Candy Camera - selfie, beauty camera, photo editor</option>
            <option>Candy Camera - selfie, beauty camera, photo editor</option>
            <option>Candy Camera - selfie, beauty camera, photo editor</option>
            <option>Candy Crush Saga</option>
            <option>Candy Crush Soda Saga</option>
            <option>Clash of Clans</option>
            <option>Clash Royale</option>
            <option>Clean Master- Space Cleaner & Antivirus</option>
            <option>Cloud Print</option>
            <option>CM Launcher 3D - Theme, Wallpapers, Efficient</option>
            <option>ColorNote Notepad Notes</option>
            <option>Cooking Fever</option>
            <option>Crossy Road</option>
            <option>Cut the Rope FULL FREE</option>
            <option>Cymera Camera- Photo Editor, Filter,Collage,Layout</option>
            <option>Dr. Driving</option>
            <option>Dream League Soccer 2018</option>
            <option>Dropbox</option>
            <option>DU Battery Saver - Battery Charger & Battery Life</option>
            <option>Duolingo: Learn Languages Free</option>
            <option>eBay: Buy & Sell this Summer - Discover Deals Now!</option>
            <option>ES File Explorer File Manager</option>
            <option>Evernote �?Organizer, Planner for Notes & Memos</option>
            <option>Extreme Car Driving Simulator</option>
            <option>Facebook</option>
            <option>Facebook Lite</option>
            <option>Farm Heroes Saga</option>
            <option>File Commander - File Manager/Explorer</option>
            <option>Firefox Browser fast & private</option>
            <option>Flipboard: News For Our Time</option>
            <option>Flipkart Online Shopping App</option>
            <option>Flipkart Online Shopping App</option>
            <option>Flow Free</option>
            <option>Fruit Ninja®</option>
            <option>Garena Free Fire</option>
            <option>Gboard - the Google Keyboard</option>
            <option>Geometry Dash Lite</option>
            <option>Gmail</option>
            <option>GO Keyboard - Cute Emojis, Themes and GIFs</option>
            <option>GO Keyboard - Emoticon keyboard, Free Theme, GIF</option>
            <option>GO Launcher - 3D parallax Themes & HD Wallpapers</option>
            <option>GO SMS Pro - Messenger, Free Themes, Emoji</option>
            <option>Google</option>
            <option>Google Calendar</option>
            <option>Google Chrome: Fast & Secure</option>
            <option>Google Drive</option>
            <option>Google Duo - High Quality Video Calls</option>
            <option>Google Earth</option>
            <option>Google Keep</option>
            <option>Google News</option>
            <option>Google Pay</option>
            <option>Google Photos</option>
            <option>Google Play Books</option>
            <option>Google Play Games</option>
            <option>Google Play Movies & TV</option>
            <option>Google Sheets</option>
            <option>Google Street View</option>
            <option>Google Translate</option>
            <option>Google+</option>
            <option>Hangouts</option>
            <option>Hay Day</option>
            <option>Helix Jump</option>
            <option>Hill Climb Racing</option>
            <option>Hill Climb Racing 2</option>
            <option>Hola Launcher- Theme,Wallpaper</option>
            <option>Hotstar</option>
            <option>Hungry Shark Evolution</option>
            <option>IMDb Movies & TV</option>
            <option>imo beta free calls and text</option>
            <option>Instagram</option>
            <option>Jetpack Joyride</option>
            <option>KakaoTalk: Free Calls & Text</option>
            <option>Kik</option>
            <option>Lep's World 2 🍀🍀</option>
            <option>LINE Camera - Photo editor</option>
            <option>LINE: Free Calls & Messages</option>
            <option>Lookout Security & Antivirus</option>
            <option>Maps - Navigate & Explore</option>
            <option>Messenger Lite: Free Calls & Messages</option>
            <option>Messenger �?Text and Video Chat for Free</option>
            <option>Microsoft Excel</option>
            <option>Microsoft OneDrive</option>
            <option>Microsoft OneNote</option>
            <option>Microsoft Outlook</option>
            <option>Microsoft PowerPoint</option>
            <option>Microsoft Word</option>
            <option>Microsoft Word</option>
            <option>Minion Rush: Despicable Me Official Game</option>
            <option>Mobile Legends: Bang Bang</option>
            <option>Modern Combat 5: eSports FPS</option>
            <option>MX Player</option>
            <option>My Talking Angela</option>
            <option>My Talking Tom</option>
            <option>Netflix</option>
            <option>OfficeSuite : Free Office + PDF Editor</option>
            <option>Opera Browser: Fast and Secure</option>
            <option>Opera Mini - fast web browser</option>
            <option>PAC-MAN</option>
            <option>Parallel Space - Multiple accounts & Two face</option>
            <option>Period Tracker - Period Calendar Ovulation Tracker</option>
            <option>Photo Editor Collage Maker Pro</option>
            <option>Photo Editor Pro</option>
            <option>PhotoGrid: Video & Pic Collage Maker, Photo Editor</option>
            <option>PicsArt Photo Studio: Collage Maker & Pic Editor</option>
            <option>Pinterest</option>
            <option>Plants vs. Zombies FREE</option>
            <option>Pou</option>
            <option>Retrica</option>
            <option>ROBLOX</option>
            <option>Roll the Ball® - slide puzzle</option>
            <option>S Photo Editor - Collage Maker , Photo Collage</option>
            <option>Samsung Calculator</option>
            <option>Samsung Health</option>
            <option>Samsung Smart Switch Mobile</option>
            <option>Score! Hero</option>
            <option>Security Master - Antivirus, VPN, AppLock, Booster</option>
            <option>Shadow Fight 2</option>
            <option>Share Music & Transfer Files - Xender</option>
            <option>SHAREit - Transfer & Share</option>
            <option>SHAREit - Transfer & Share</option>
            <option>Skater Boy</option>
            <option>Skype - free IM & video calls</option>
            <option>slither.io</option>
            <option>Smash Hit</option>
            <option>Snapchat</option>
            <option>Sniper 3D Gun Shooter: Free Shooting Games - FPS</option>
            <option>Sonic Dash</option>
            <option>Speedtest by Ookla</option>
            <option>Subway Surfers</option>
            <option>Sweet Selfie - selfie camera, beauty cam, photo edit</option>
            <option>SwiftKey Keyboard</option>
            <option>Talking Ben the Dog</option>
            <option>Talking Tom Cat</option>
            <option>Talking Tom Cat 2</option>
            <option>Talking Tom Gold Run</option>
            <option>Tango - Live Video Broadcast</option>
            <option>Telegram</option>
            <option>Temple Run</option>
            <option>Temple Run 2</option>
            <option>Tik Tok - including musical.ly</option>
            <option>Tiny Flashlight + LED</option>
            <option>Traffic Racer</option>
            <option>Traffic Racer</option>
            <option>TripAdvisor Hotels Flights Restaurants Attractions</option>
            <option>Trivia Crack</option>
            <option>Truecaller: Caller ID, SMS spam blocking & Dialer</option>
            <option>Truecaller: Caller ID, SMS spam blocking & Dialer</option>
            <option>Tumblr</option>
            <option>Twitter</option>
            <option>UC Browser - Fast Download Private & Secure</option>
            <option>UC Browser Mini -Tiny Fast Private & Secure</option>
            <option>Vector</option>
            <option>Viber Messenger</option>
            <option>VideoShow-Video Editor, Video Maker, Beauty Camera</option>
            <option>VivaVideo - Video Editor & Photo Movie</option>
            <option>VLC for Android</option>
            <option>Wattpad 📖 Free Books</option>
            <option>Wattpad 📖 Free Books</option>
            <option>Waze - GPS, Maps, Traffic Alerts & Live Navigation</option>
            <option>Waze - GPS, Maps, Traffic Alerts & Live Navigation</option>
            <option>WeChat</option>
            <option>WhatsApp Messenger</option>
            <option>Where's My Water? Free</option>
            <option>Who</option>
            <option>Wish - Shopping Made Fun</option>
            <option>WPS Office - Word, Docs, PDF, Note, Slide & Sheet</option>
            <option>Yahoo Mail �?Stay Organized</option>
            <option>Yes day</option>
            <option>YouCam Makeup - Magic Selfie Makeovers</option>
            <option>YouCam Perfect - Selfie Photo Editor</option>
            <option>YouTube</option>
            <option>Z Camera - Photo Editor, Beauty Selfie, Collage</option>
            <option>ZEDGE�?Ringtones & Wallpapers</option>
            <option>Zombie Tsunami</option>
        </datalist>

        <button id="button1" onClick={show}>确定</button>
        <br></br>
      </div>
    );
  }

  export default Button1