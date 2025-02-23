(function() {
    'use strict';

    // Function to append div with innerHTML string
    const appendDiv = () => {

        const content_region = document.querySelector('.contentRegionScroller-2_GT_N');
        const targetElement = content_region; //document.querySelector('div.contentColumn-1C7as6.contentColumnDefault-3eyv5o#my-account-tab');
        
        if (targetElement && targetElement.style.display !== 'none' && !targetElement.hasAttribute('data-appended')) {
            const beancord_tab = document.createElement('div');
            beancord_tab.classList.add('contentColumn-1C7as6', 'contentColumnDefault-3eyv5o');
            beancord_tab.setAttribute('role', 'tabpanel');
            beancord_tab.setAttribute('id', 'beancord_tab');
            beancord_tab.setAttribute('tabindex', '-1');
            beancord_tab.setAttribute('data-appended', 'true');
            beancord_tab.style.display = 'none';
            
            // Create a new div element
            const beancord_menu = document.createElement('div');
            beancord_menu.setAttribute('id', 'beancord_menu');
            //beancord_menu.style.display = 'none';
            beancord_menu.innerHTML = `
            <div class="sectionTitle-LdcnyP">
                <h2 class="h1-3iMExa title-lXcL8p defaultColor-3Olr-9 defaultMarginh1-1UYutH">Beancord Settings</h2>
            </div>
            <h3 class='h5-2feg8J eyebrow-2wJAoF defaultMarginh5-3THN2O'>Themes</h3>
            <div class="themesel" id="themesel">
            <button id="theme2" class="button-ejjZWC lookFilled-1H2Jvj colorRed-2VFhM4 sizeSmall-3R2P2p grow-2T4nbg" style="margin-bottom: 10px">Reset Default</button>
            <img id='theme1' src='https://i.imgur.com/3QOLS1R.png' style="height: 135px; width: 240px; border: 2px solid white">
            <p class="colorStandard-1Xxp1s size14-k_3Hy4 description-foE_WP formText-2UzJT0 description-3KXNo8 modeDefault-3Warim" style="margin-top: 2px; font-size: 10px">Credit: FeaR#3500</p>
            </div>
            <div class="divider-3nqZNm marginTop40-Q4o1tS" style="margin-bottom: 40px"></div>
            `; // Replace with your desired innerHTML string

            // Append the div as the first child of the target element
            beancord_tab.appendChild(beancord_menu);
            content_region.appendChild(beancord_tab);
            //targetElement.insertBefore(beancord_menu, targetElement.firstChild);

            // Add class to the first element with class "sectionTitle-LdcnyP"
            const sectionTitleElement = document.querySelector('.sectionTitle-LdcnyP:not(.marginTop40-Q4o1tS)');
            if (sectionTitleElement) {
                sectionTitleElement.classList.add('marginTop40-Q4o1tS');
            }

            // Add data attribute to indicate that the div has been appended
            targetElement.setAttribute('data-appended', 'true');
        }
    };

    // Function to check if the target element is visible and append the div if it is
    const checkAndAppendDiv = () => {
        const targetElement = document.querySelector('div.contentColumn-1C7as6.contentColumnDefault-3eyv5o#my-account-tab');

        if (targetElement && targetElement.style.display !== 'none') {
            appendDiv();
        }
    };
    const customStyles1 = `
    /* ------BACKGROUND------ */   /*contact me (FeaR#3500)*/ /*I'm bad in English so be patient I have autism :D SadCat*/
    body {
        
        background: url("https://media.discordapp.net/attachments/892911171437494354/932728589525319771/image_2.png?width=722&height=406");           
        background-size: cover;
    }
    .appMount-3lHmkl {
        background: rgba(0, 0, 0, .7); /*Opacity*/
        
    /*------------------------------------------------------*/    
    }
        ::selection {background:  #ff11009e ;} /*selecton*/
    
    /* ------REMOVE GREY/WHITE BG COLORS------ */
    .theme-dark,
    .theme-light {
        --header-primary: #f00;
        --text-link: #0083ff;
        --header-secondary: #dc0004;
        --text-normal: #ffffff;
        --text-muted: #f00;
        --channels-default: #900005;
        --interactive-normal: #8e0006;
        --interactive-hover: #f00;
        --interactive-active: #770005;
        --interactive-muted: #ffffff4d;
        --background-primary: transparent;
        --background-secondary: transparent;
        --background-tertiary: transparent;
        --background-accent: transparent;
        --background-floating: rgba(0, 0, 0, .8);
        --channeltextarea-background: #0e0e0e;
        --activity-card-background: transparent;
        --deprecated-panel-background: transparent;
        --background-mentioned: rgb(3, 169, 244, 0.12);
        --background-mentioned-hover: rgb(3, 169, 244, 0.12);
    }
    /*standart username color*/
    .username-1A8OIy {
        color: #fff;
        text-shadow: 0 0 3px red;
    }
    /*remove borders*/
    .header-2o-2hj,
    .searchBar-6Kv8R2,
    .content-yTz4x3::before {
        box-shadow: none !important;
    }
    
    /*misc*/
    .container-3gCOGc,  /*friends list*/
    .wrapper-3WhCwL,    /*mentions*/
    .scrollbar-2rkZSL,  /*scrollbar*/
    .pad-29zQak,
    .track-1JN30G {
        background: #00b0ff00 !important;
        -webkit-box-shadow: inset 0 0px 10px 0 rgba(0, 225, 255, .62);
     
    }
    
    .scrollbar-2rkZSL {
        width: 8px;
    }
    /* ------SCROLLBAR------ */
    .theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-track-piece {         
        background-color: #00000036;
        border: 3px solid #0000;
    }
    .theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-thumb {
        background-color: #ff00006e;
        border-color: #ff00006e;
    }
    .thumb-2JwNFC {
        background: #ff000080 !important;
    }
    .track-1JN30G,
    .thumb-2JwNFC {
        border: none !important;
    }
    
    /* ------EMBEDDED TEXT------ */
    .embedProvider-3k5pfl,
    .embedDescription-1Cuq9a,
    .embedFields-2IPs5Z,
    .embedAuthorName-3mnTWj,
    .embedFooterText-28V_Wb {
        color: #f2f2f2 !important;
    }
    
    /* ------POP-UP------ */
    .modal-yWgWj-,
    .footer-3rDWdC {
        background: rgba(0, 0, 0, .18) !important;
    }
    
    /*BACKGROUND of PEOPLE*/
    .theme-dark .container-1D34oG {         
        background-color: #f000;
    }
    /*NITRO BACKGROUND*/
    .applicationStore-1pNvnv {              
        background-color: #02020200;
    }
    
    /*MENTION*/
    .theme-dark .wrapper-3UweLa {    
        background: #21355200; 
    }                          
    .theme-dark .wrapper-3UweLa {      
        color: #b9bbbe;
        background: #20222500;             
    }
    
    .theme-dark .header-ykumBX {
        background-color: #ff000000;
    }
    
    .theme-dark .messagesPopout-24nkyi {
        background-color: #00000029;
    }
    .theme-dark .messagesPopoutWrap-1MQ1bW {
        background-color: #040405b3;
        border: 1px solid rgba(252, 58, 58, .56);
        -webkit-box-shadow: 0 2px 10px 0 rgba(197, 12, 12, 0);
        box-shadow: 0 2px 10px 0 rgb(255, 0, 0);
    }
    
    .theme-dark .messageGroupWrapper-o-Zw7G {
        border-color: rgb(185, 11, 51);
        background-color: #000000bf;           
    }
    .statusGreen-168O6Q {
        color: #ff0057;
    }
    .theme-dark .channelName-3kBz6H {
        color: #d00004;
    }
    .themedPopout-1TrfdI .header-2Kf7Yu .title-2-NHs5 {
        color: #ff0000;
    }
    /* NOW PLAYING */
    .theme-dark .jumpButton-3DTcS_ {          
        background-color: #b90b0b1a;      
    
    }
    .theme-dark .popoutContainer-3WC9HR:hover {
        background-color: #00000070;
    }
    .theme-dark .inset-GQDQYw {
        background-color: #fb3a3a1a;
    }
    
    
    .theme-dark .popout-3G62UL {
        background-color: #040405c2;                  
        
    }
    .theme-dark .recentlyPlayedContainer-2F3MqS {
        background-color: #fb3a3a1a;                       
    }
    
    
    .theme-dark .separator-2c4hi3 {
        background-color: #ff000042;
    }
    
    .theme-dark .applicationStreamingPreviewWrapper-GnrvWN {
        background-color: #2f292900;
    }
    
    .selected-aXhQR6 .layout-2DM8Md {
        background-color: #ff000026;
    }
    
    /*active channels*/
    .modeConnected-2IEL4z .name-3_Dsmg, .modeConnected-2IEL4z:hover .name-3_Dsmg, .modeSelected-1zApJ_ .name-3_Dsmg, .modeSelected-1zApJ_:hover .name-3_Dsmg, .modeUnread-1zpFdA .name-3_Dsmg, .modeUnread-1zpFdA:hover .name-3_Dsmg, .notInteractive-YF5EXq.modeConnected-2IEL4z .name-3_Dsmg, .notInteractive-YF5EXq.modeSelected-1zApJ_ .name-3_Dsmg {
        color: #f00;
    }
    
    /*default nicknames(channel)*/
    .container-2Pjhx- {         
        color: #ffffff;
    }
    
    .activity-2Gy-9S {
        color: #c7c7c7;
    }
    /*UPLOAD FILE*/
    .theme-dark .uploadModal-2ifh8j {
        background-color: #0000006b;
        -webkit-box-shadow: 0 0 0 1px rgba(105, 16, 16, .86), 0 2px 10px 0 rgba(255, 6, 6, 0);
        box-shadow: 0 0 0 1px rgba(3, 169, 244, 0.12), 0 2px 10px 0 rgb(244, 3, 3);
    }
    .theme-dark .footer-3mqk7D {
        background-color: #0000006b;
        -webkit-box-shadow: inset 0 1px 0 rgba(255, 0, 0, 0.54);
        box-shadow: inset 0 1px 0 rgba(244, 3, 3, .6);
    }
    
    .textArea-12jD-V {
        background-color: #f4030300;
    }
      /*UPLOAD BUTTON*/
    .lookFilled-1Gx00P.colorBrand-3pXr91 {     
        background-color: #f40303c9;            
    }
    .lookFilled-1Gx00P.colorBrand-3pXr91:hover {
        background-color: #03A9F4;
    }
    /*GIFS*/
    .theme-dark .autocomplete-1vrmpx {       
        background-color: #000000a3;
    }
     /*NITRO GIFT*/
    .theme-dark .root-1gCeng {                                               
        background-color: #000000cc;
        -webkit-box-shadow: 0 0 0 1px rgba(32,34,37,.6), 0 2px 10px 0 rgba(0,0,0,.2);
        box-shadow: 0 0 0 1px rgba(244, 3, 3, .34), 0 2px 10px 0 #f40303;
    }
    /*search*/
    .theme-dark .searchResultsWrap-2DKFzt {   
        background-color: #00000096;
    }
    .theme-dark .searchHeader-1l-wpR {
        background-color: #000000c2;
    }
    .theme-dark .searchResultsWrap-2DKFzt {
        background-color: #00000000;
    }
    .theme-dark .searchResult-3pzFAB .hit-NLlWXA {
        background-color: #00000061;
        -webkit-box-shadow: 0 0 10px 6px #2f313600;
        box-shadow: 0 0 10px 6px #0000004a;
    }
    .theme-dark .channelSeparator-1X1FuH .channelName-1QajIf {
        color: #fff;
        background-color: #2f313600;
    }
    .theme-dark .searchResult-3pzFAB:before {
        background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(47,49,54,0)),to(#2f313600));
        background-image: linear-gradient(0deg,rgba(47,49,54,0),#0000);
    }
    .theme-dark .searchResult-3pzFAB:after {
        background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(47,49,54,0)),to(#2f313600));
        background-image: linear-gradient(0deg,rgba(47,49,54,0),#0000);
    }
    .theme-dark .emptyPlaceholder-1zh-Eu .body-bvcIjN {
        color: hsl(0, 0%, 100%);
    }
    .theme-dark .searchAnswer-3Dz2-q, .theme-dark .searchFilter-2ESiM3 {
        background-color: #ff0000b5;
    }
    /*PEOPLE friends list shadow object selection*/
    .peopleListItem-2nzedh:hover { 
        background: #0000005e;
    }
    .clickable-1JJAn8:hover .layout-2DM8Md {
        background-color: rgba(0, 0, 0, 0.26);
    }
    /*SELECTED CHANNEL*/
    .wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9, .wrapper-1BJsBx:hover .childWrapper-anI2G9 {  
        color: #fff;
        background-color: #e91e1e;
    }
    .modeSelected-1zApJ_ .content-3at_AU, .modeSelected-1zApJ_:hover .content-3at_AU {
        background-color: #ff00004f;
    }
    /*EVERYONEEEEEEEEEEEEEEEEE*/
    .theme-dark .isMentioned-N-h9aa {  
        background: rgba(34, 255, 0, .2);
    }
    
    
    .isMentionedCozy-3isp7y:after {
        background: #00ff1e;
        border-left: 4px solid #1ee947;
    }
    .theme-dark .wrapper-3WhCwL {
        color: #0f4;
        
    }
    .reaction-1ELvT8.reactionMe-23mbRf {
        background-color: rgba(30, 196, 233, .25);
    }
    element.style {
        border-color: #00BCD4;
        max-width: 436px;
    }
    /*emoji*/
    .emojiPicker-3m1S-j {
        overflow: hidden;
        background-color: #000000de;
         -webkit-box-shadow: 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
    }
        .emojiPicker-3m1S-j .categories-1feg4n .selected-39BZ4S {
        border-bottom-color: #ff0000;
    }
     .scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-thumb, .theme-dark .scrollerWrap-2lJEkd .scroller-2FKFPG::-webkit-scrollbar-thumb, .theme-light .scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-thumb {
         background-color: #f00;
    }
         .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track, .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scrollerStore-390omS::-webkit-scrollbar-track, .theme-dark .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track, .theme-dark .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scrollerStore-390omS::-webkit-scrollbar-track, .theme-light .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track, .theme-light .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scrollerStore-390omS::-webkit-scrollbar-track {
        background-color: #33333330;
    
            
    }
    
    .infoBar-U6oBFk {
        background-color: #0000;
    }
     /*audio chat members*/
    .total-3tKGEB {
    
        background-color:#000000de;
    }
    .users-i_3-kL {
        background-color: #0e0e0e;
    }
    .total-3tKGEB:after {
    
        border-right-color: #000000de;
    }
    /* deleting message*/
    .theme-dark .message-2qRu38 {
        background-color: #000000b8; 
    }
    .lookFilled-1Gx00P.colorRed-1TFJan {
        color: #fff;
        background-color: #ff0000;
    }
    
    .wrapper-1ucjTd:hover .content-3at_AU {
        background-color: rgba(0, 0, 0, 0.52);
    }
    .theme-dark .pageWrapper-1PgVDX {
        background-color: #0000001f;
        color: #fff;
    }
    .theme-dark .searchBox-3Y2Vi7 {
        background-color: #000000cc;
    }
    .theme-dark .card-3DjzTQ, .theme-dark .cardPlaceholder-1zrbbe {
        background: #000000;
    }
    .botTagRegular-2HEhHi {
        background: #0014ff;
        
    }
    .theme-dark .modal-yWgWj- {
        box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.6), 0 2px 10px 0 rgb(255, 0, 0);
    }
    /*USER PROF*/
    .theme-dark .headerNormal-T_seeN {
        background-color: #000000c2;
    }
    .theme-dark .bodyInner-245q0L, .theme-dark .footer-1fjuF6 {
        background-color: #000000c2;
    }
    .theme-dark .quickMessage-1yeL4E {
        background-color: #000000;
        border-color: #f40303;
    }
    .userPopout-3XzG_A {
        box-shadow: 0 2px 10px 0 #f40303, 0 0 0 1px #f40303;
    }
    .headerPlaying-j0WQBV, .headerStreaming-2FjmGz {
        background: #000000c2;
    }
    .activity-11LB_k {
        background-color: rgba(244, 3, 3, .1);
    }
    .theme-dark .bodyInner-245q0L, .theme-dark .footer-1fjuF6 {
        color: hsl(0, 0%, 100%);
    }
    /*USER CALL*/
    .theme-dark .wrapper-29NfPK {
        background-color: #00000087;
    }
    .theme-dark .wrapper-29NfPK.minimum-2d6zH6 .actions-2vadYq .center-1Vp33r {
        border-color: #03a9f41a;
        background-color: #00000000;
    }
    
    .topSectionPlaying-1J5E4n {
        background: #7289da00;
    }
    
    /*>friends
              >selected*/
    .side-8zPYf6 .themed-OHr7kt.selected-3s45Ha.item-PXvHYJ, .topPill-30KHOu .themed-OHr7kt.selected-3s45Ha.item-PXvHYJ {
        background-color: #f000;
        box-shadow: inset 0 0 10px red;
        border-radius: 50px;
    }
    .side-8zPYf6 .themed-OHr7kt.item-PXvHYJ:hover, .topPill-30KHOu .themed-OHr7kt.item-PXvHYJ:hover {
        background-color: rgba(255, 0, 0, 0);
    -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
        border-radius: 50px;
    }
    /*add friend icon color*/
    element.style {
        background-color: #03A9F4;
        color: rgb(255, 255, 255);
    }
    .peopleListItem-2nzedh {
        border-top: 1px solid hsla(0, 100%, 50%, 0.06);
    }
    
    /*SEARCH OPTIONS*/
    .theme-dark .container-3ayLPN {
        background-color: #000000e0;
    }
    .theme-dark .elevationBorderHigh-2WYJ09 {
        box-shadow: 0 0px 10px 0 #f40303, 0 0 0 1px #f40303;
    
    }
    .theme-dark .resultsGroup-r_nuzN .header-2N-gMV, .theme-dark .resultsGroup-r_nuzN .plusIcon-v0BTrL, .theme-dark .resultsGroup-r_nuzN .searchClearHistory-2cSSMO, .theme-dark .resultsGroup-r_nuzN .searchLearnMore-3SQUAj a {
        color: #c60a0a;
    }
    .theme-dark .searchOption-zQ-1l6 .filter-3Y_im- {
        color: #c60a0a;
    }
    .theme-dark .searchOption-zQ-1l6 .answer-1n6g43 {
        color: rgba(10, 189, 198, 0.5);
    }
    .theme-dark .resultsGroup-r_nuzN .header-2N-gMV, .theme-dark .resultsGroup-r_nuzN .plusIcon-v0BTrL, .theme-dark .resultsGroup-r_nuzN .searchClearHistory-2cSSMO, .theme-dark .resultsGroup-r_nuzN .searchLearnMore-3SQUAj a {
        color: #c60a0a;
    }
    .theme-dark .resultsGroup-r_nuzN:hover .header-2N-gMV:hover, .theme-dark .resultsGroup-r_nuzN:hover .plusIcon-v0BTrL:hover, .theme-dark .resultsGroup-r_nuzN:hover .searchClearHistory-2cSSMO:hover, .theme-dark .resultsGroup-r_nuzN:hover .searchLearnMore-3SQUAj:hover a {
        color: #c32a00;
    }
    .theme-dark .option-96V44q:after {
        background: none;
    }
    .theme-dark .option-96V44q .answer-1n6g43, .theme-dark .option-96V44q .nonText-3CRkO0, .theme-dark .option-96V44q strong {
        color: #f00;
    }
    .theme-dark .option-96V44q.selected-rZcOL- {
        -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
        background-color: rgba(255, 0, 0, 0);
    }
    .theme-dark .option-96V44q.selected-rZcOL-:after {
        background: none;
    }
    .theme-dark .focused-2bY0OD {
        background-color: #000b1e;
    }
    .theme-dark .queryContainer-RKFJW- {
        color: #c60a0a;
        border-bottom-color: rgba(19, 62, 124,.3);
    }
    .theme-dark .queryContainer-RKFJW- strong {
        color: #f00;
    }
    .theme-dark .option-96V44q .filter-3Y_im- {
        color: rgba(198, 10, 10, .7);
    }
    .theme-dark .dim-1l4L4y span {
        background-color: #7c1313;
        color: #c60a0a;
    }
    .theme-dark .keybindShortcut-1BD6Z1 span {
        color: #c60a0a;
        -webkit-box-shadow: inset 0 -4px 0 rgba(0, 11, 30,.6);
        box-shadow: inset 0 -4px 0 rgba(0, 11, 30,.6);
        border: 1px solid #330909;
        background-color: #7c1313;
    }
    /*FOLLOW 2*/
    .theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6 {
        color: #f6f6f7;
        background-color: #ff0000;
    }
    .dividerEnabled-2TTlcf {
        border-bottom-color: hsla(0, 100%, 50%, 0.06);
    }
    .form-2fGMdU {
        border-top: 1px solid hsla(0, 100%, 50%, 0);
    }
    .newMessagesBar-mujexs {
        background-color: #03a9f4;
    }
    .scrollableContainer-2NUZem {
        border-radius: 30px;
    }
    /*ACTIVE NOW*/
    .theme-dark .inset-3sAvek {
        background-color: #ff000000;
    }
    .theme-dark .popout-13LQ_3 {
        background-color: #00000066
    }
    /*active now selected*/
    .theme-dark .popout-38lTFE {
        background-color: #000000a6;
    -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
    }
    .theme-dark .separator-XqIyoz {
        background-color: #ff000030;
    }
    .colorStandard-2KCXvj {
        color: #f00;;
    }
    .theme-dark .enabled-1t_Gxm:hover{
        background-color: #0000;
        -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
    }    
    .theme-dark .memberListItem-31QoHj:not(.popoutDisabled-2RK7MF):hover {
        background-color: #0000;
    -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);    
    }
    .theme-dark .outer-1AjyKL.active-1xchHY, .theme-dark .outer-1AjyKL.interactive-3B9GmY:hover {
        background-color: #000000a6;
    -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
    }
    /*Main user panel*/
    .panels-j1Uci_ {
        background-color: #292b2f00;
    }
    /*on botton*/
    .themeDefault-24hCdX.valueChecked-m-4IJZ {
        background-color: #ff0000;
    }
    element.style {
        border-color: rgb(255, 0, 0);
        background-color: rgb(255, 0, 0);
        box-shadow: 0 0 20px red;
    }
    /*clicked reaction*/
    .reaction-1hd86g.reactionMe-wv5HKu {
        background-color: rgba(255, 0, 0, 0.3);
         -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
    }
    /*new mentions*/
    .mention-1f5kbO {
        background-color: #03a9f4;
    }
    /*pinned messagers*/
    .iconBadge-qZ4Ksk {
        background-color: #03A9F4;
    }
    /*addressed you*/
    
    .mentioned-xhSam7 {
        background-color: rgba(3, 169, 244, 0.12);
        
    }
    
    .mentioned-xhSam7:before {
        background-color: #03A9F4;
    }
    /*1.2*/
    /*discord player*/
    .mediaBarGrabber-1FqnbN, .mediaBarProgress-1xaPtl, .mediaBarProgress-1xaPtl:after, .mediaBarProgress-1xaPtl:before {
        background-color: #ff0000;
    }
    /*discord audio player*/
    .theme-dark .wrapperAudio-1jDe0Q {
        background-color: rgba(99, 0, 0, 0.3);
        border-color: rgba(255, 0, 0, 0.62);
    }
    /*settings*/
    .cardPrimary-1Hv-to {
        background: rgb(9, 9, 9);
    }
    .cardPrimaryEditable-3KtE4g {
        background: rgb(9, 9, 9);
    }
    .cardPrimary-1Hv-to, .cardPrimaryEditable-3KtE4g {
        border-color: red;
        box-shadow: 0 0 13px red;
    }
    .theme-dark .questionMark-CWEQZn {
        background-color: #c3000c;
    }
    .lookFilled-1Gx00P.colorGreen-29iAKY {
        background-color: #ff0000;
    }
    .lookFilled-1Gx00P.colorGreen-29iAKY:hover {
        background-color: #03A9F4;
    }
    /*selected user right panel*/
    .selected-aXhQR6 .layout-2DM8Md {
        background-color: #ff000026;
        box-shadow: inset 0 0 10px red;
    }
    .clickable-1JJAn8:hover .layout-2DM8Md {
    -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
    }
    /*selected channel*/
    .wrapper-1ucjTd:hover .content-3at_AU {
    -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
    }
    .modeSelected-1zApJ_ .content-3at_AU, .modeSelected-1zApJ_:hover .content-3at_AU {
        background-color: #ff000026;
    -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgba(255, 0, 0, 0);
    
    }
    /*selected>friends*/
    .peopleListItem-2nzedh:hover {
        background: #ff000014;
        box-shadow: inset 0 0 10px red;
    }
    /*color of selected friend/nitro*/
    .clickable-1JJAn8.container-2Pjhx-:active, .selected-aXhQR6.container-2Pjhx- {
        color: #ff1100;
    }
    /*selected friend options*/
    .contextMenu-HLZMGh {
        box-shadow: 0 0px 10px 0 #f40303, 0 0 0 1px #f40303;
        background-color: rgba(0, 0, 0, 0.97);
    }
    .root-SR8cQa { 
        box-shadow: 0 0px 10px 0 #f40303, 0 0 0 1px #f40303;
            background-color: #000000c9;
    }
    /*channel menu*/
    .menu-Sp6bN1 {    
            box-shadow: 0 0px 10px 0 #f40303, 0 0 0 1px #f40303;
            background-color: #000000f5;
    }
    /*ADD role*/
    .theme-dark .autocompleteArrow-Zxoy9H, .theme-dark .autocompleteShadow-iiGWFU {
        -webkit-box-shadow: 0 2px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgba(255, 0, 0, 0.6);
        box-shadow: 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgba(255, 0, 0, 0.6);
    }
    .theme-dark .autocompleteArrow-Zxoy9H, .theme-dark .autocompleteHeaderBackground-30T70q {
        background-color: #000000c7;
    }
    .theme-dark .container-VSDcQc .sectionTag-pXyto9 {
        background-color: #0000007a;
        color: #72767d00;
    }
    .theme-dark .row-rrHHJU.selected-1pIgLL {
        background: -webkit-gradient(linear,left top,right top,from(rgba(255, 0, 0, 0.8)),to(#2f3136));
        background: linear-gradient(90deg,rgba(255, 0, 0, 0.58),#000000);
    }
    /*user volume*/
    .barFill-23-gu- {
        background: #ff0000;
    }
    .clickable-11uBi-:hover, .selected-BYpGTS {
        background-color: rgba(113, 0, 0, 0);
        cursor: pointer;
        box-shadow: inset 0 0 10px #ff00003d;
    }
    .clickable-2ap7je .header-2o-2hj:hover, .selected-WP3kCM .header-2o-2hj {
        background-color: rgba(103, 0, 0, 0.16);
    }
    .theme-dark .friend-3KALPe {
        color: #ff0000;
    }
    .theme-dark .friendSelected-1sa4bG {
        -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
        background-color: rgba(255, 0, 0, 0);
        color: #fff;
    }
    .theme-dark .checked-3_4uQ9 {
        border-color: #ff0000;
        background-color: #ff00004a;
    }
    element.style {
        border-color: rgb(255, 0, 0);
    }
    .peopleListItem-2nzedh.active-rhSpJJ, .peopleListItem-2nzedh:hover {
            -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
        background-color: rgba(255, 0, 0, 0);
        color: #fff;
    }
    
    
    .theme-dark .selectorSelected-1_M1WV {
    -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
        background-color: rgba(255, 0, 0, 0);
        border-radius: 0px;
    }
        .theme-dark .autocomplete-1vrmpx {
        background-color: #000000b0;
           -webkit-box-shadow: 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
            
    }
    /*1.5v*/
    .listDefault-2y5Z9D .clickable-23RaYz:hover .content-3xS9Lh {
     -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
        background-color: rgba(255, 0, 0, 0);
    }
    
    
    .itemActive-2V2HNc {
        -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
        background-color: rgba(255, 0, 0, .05);
    }
    .itemBase-1Qj4z6:hover {
        -webkit-box-shadow: inset 0 0px 10px 0 rgb(255, 0, 0), 0 0 0 1px rgb(255, 0, 0);
        background-color: rgba(255, 0, 0, 0);
    }
    
    .theme-dark .attachment-33OFj0 {
        border-color: rgba(99, 0, 0, 0.72);
        background-color: rgba(68, 0, 0, 0.3);
    }
    .search-2oPWTC{
      -webkit-box-shadow: inset 0 0px 10px 0 rgba(255, 0, 0, .75), 0 0 0 1px rgba(255, 0, 0, 0);
        border-radius: 50px;
    }
    .markup-2BOw-j code {
        background: #0e0e0ec2;;
        
    }
    
    .mentioned-xhSam7 {
        position: relative;
        background-color: rgba(3, 169, 244, 0.12);
    }
    }
    `;
  
    const customStyles2 = `
    `;
    // Run the checkAndAppendDiv function every 500 milliseconds
    const checkInterval = setInterval(checkAndAppendDiv, 500);

    function createMenuTabButton() {

    }

// Function to inject custom CSS rules and append buttons
function injectCustomStylesAndButtons() {

    const discord_cog = document.querySelector('.flex-2S1XBF button:last-child');
    discord_cog.addEventListener('click', function() {
        createMenuTabButton();
    })

  const styleElement = document.createElement('style');
  document.head.appendChild(styleElement);
  
  const button1 = document.getElementById('theme1');
  button1.addEventListener('click', () => {
    styleElement.textContent = customStyles1;
    console.log('theme 1 button pressed');
  });

  // Append a button for option 2
  const button2 = document.getElementById('theme2');
  if (button2) { // Check if the button2 element exists
    button2.addEventListener('click', () => {
      styleElement.textContent = customStyles2;
      console.log('theme 2 button pressed');
    });
  }

    const user_settings = document.querySelector('.side-1lrxIh');

    const beancord_settings = document.createElement('div');
    beancord_settings.style = "margin-bottom: 5px;"
    beancord_settings.setAttribute('class', 'item-2GWPIy themed-qqoYp3');
    beancord_settings.setAttribute('role', 'tab');
    beancord_settings.setAttribute('aria-selected', 'true');
    beancord_settings.setAttribute('aria-controls', 'Beancord');
    beancord_settings.setAttribute('aria-disabled', 'false');
    beancord_settings.setAttribute('tabindex', '0');
    beancord_settings.setAttribute('aria-label', 'Beancord');
    beancord_settings.id = 'beancord_settings';
    beancord_settings.textContent = 'Beancord';

    user_settings.insertBefore(beancord_settings, user_settings.firstChild);

    const beancord_tab = document.getElementById('beancord_tab');
    const menu_container = beancord_tab.parentElement;

    beancord_settings.addEventListener('click', function() {
        beancord_settings.classList.add('selected-1sf9UK');
        document.getElementById('beancord_tab').style.display = 'block';

        // Hide all the child nodes of menu_container
        const toolsContainer = document.querySelector('.toolsContainer-25FL6V');
        for (let i = 0; i < menu_container.children.length; i++) {
            const child = menu_container.children[i];
            if (child !== beancord_tab && child !== toolsContainer) {
              child.style.display = 'none';
            }
        }              

        beancord_tab.style.display = 'block';
    })

    user_settings.addEventListener('click', (event) => {
        // Check if the clicked element is not beancord_settings
        if (event.target !== beancord_settings) {
          // Remove 'selected-1sf9UK' class from all elements except beancord_settings
          document.querySelectorAll('.selected-1sf9UK:not(#beancord_settings)').forEach(element => {
            element.classList.remove('selected-1sf9UK');
          });
          beancord_settings.classList.remove('selected-1sf9UK');
          beancord_tab.style.display = 'none';
          for (let i = 0; i < menu_container.children.length; i++) {
            if (menu_container.children[i] !== beancord_tab) {
              menu_container.children[i].style.display = 'block';
            }
          }
        } else {
          // Remove 'selected-1sf9UK' class from beancord_settings
          beancord_settings.classList.remove('selected-1sf9UK');
        }
        // Add 'selected-1sf9UK' class to clicked element
        event.target.classList.add('selected-1sf9UK');
    });       
}

window.addEventListener('DOMContentLoaded', function() {
  const styleElement = document.createElement('style');
  document.head.appendChild(styleElement);
  
  document.body.addEventListener('click', function(event) {
  var target = event.target;

  // Check if the clicked element is a button
  if (target.tagName === 'BUTTON' || target.tagName === 'IMG') {
    // Handle click event for button 1
    if (target.id === 'theme1') {
      console.log('Button 1 clicked!');
      styleElement.textContent = "";
      styleElement.textContent = customStyles1;
    }
    // Handle click event for button 2
    else if (target.id === 'theme2') {
      console.log('Button 2 clicked!');
      styleElement.textContent = "";
      styleElement.textContent = customStyles2;
    }
  }
});
})

// Create a Mutation Observer
const observer = new MutationObserver(() => {
  const element = document.querySelector('.themesel#themesel, #themesel.themesel');
  if (element) {
    // Call injectCustomStylesAndButtons() if the element is detected
    injectCustomStylesAndButtons();
    observer.disconnect(); // Disconnect the observer once the element is detected
  }
});

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Start observing the body for mutations
  observer.observe(document.body, { childList: true, subtree: true });
});

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.themesel#themesel, #themesel.themesel');

  // Create an Intersection Observer
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Append buttons and inject CSS only when the element is visible
        injectCustomStylesAndButtons();
        intersectionObserver.unobserve(entry.target); // Stop observing once the element is visible
      }
    });
  });

  // Start observing the element
  if (element) {
    intersectionObserver.observe(element);
  }
});

})();