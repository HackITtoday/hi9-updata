
(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
    setTimeout(function() {       
      document.querySelectorAll('html hi9-login')[0].$.login();
    },6000)
  });
  app.login = function() {       
      document.querySelectorAll('html hi9-login')[0].$.login();
  }
  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };
  
  
  
  
  
  
  

  //<!-- gosquared code  -->
  //	<script>
	  !function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
	  arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
	  d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
	  insertBefore(d,q)}(window,document,'script','_gs');

	  _gs('GSN-963825-Q');
		
//	</script>	
//  <!-- end of gosquared coce  -->

//	<!-- Start of hi9help Zendesk Widget script -->
//		<script>
                /*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(c){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload="document._l();">'),o.close()}("https://assets.zendesk.com/embeddable_framework/main.js","hi9help.zendesk.com");/*]]>*/
                //</script>
//	<!-- End of hi9help Zendesk Widget script -->

//	<!-- Google Analytics -->
//	<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-52626656-2', 'auto');
		  ga('send', 'pageview');
//	</script>
//	<!-- End of Google Analytics -->
})(document);
