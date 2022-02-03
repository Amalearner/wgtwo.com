"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[9553],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,h=m["".concat(l,".").concat(p)]||m[p]||g[p]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8564:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return g},default:function(){return p}});var i=n(7462),o=n(3366),a=(n(7294),n(4137)),r=["components"],s={slug:"mqtt-event-bridge",title:"Changing the color of your bulbs: The fancy way",date:new Date("2021-01-07T00:00:00.000Z"),tags:["api","grpc","mqtt","node-red"],author:"Gunnar Inge G. Sortland",author_title:"Software Engineer @ wgtwo",author_url:"https://www.linkedin.com/in/gunnaringe/",author_image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQFnInHIEXjS7w/profile-displayphoto-shrink_400_400/0/1516312934330?e=1648684800&v=beta&t=FafxE3bOUsOclBJCs5mN2iXXnu3ifBW83TbjDgItL0c"},l=void 0,u={permalink:"/blog/mqtt-event-bridge",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2021-01-07-mqtt-event-bridge.md",source:"@site/../blog/2021-01-07-mqtt-event-bridge.md",title:"Changing the color of your bulbs: The fancy way",description:"Last hackathon I did setup a MQTT integration towards wgtwo's APIs to enable call notifications via my IKEA Tr\xe5dfri bulb so I can finally notice my wife calling me. The bulb changes color when my phone is ringing and when I am in a call, without me needing to install anything to my phone.",date:"2021-01-07T00:00:00.000Z",formattedDate:"January 7, 2021",tags:[{label:"api",permalink:"/blog/tags/api"},{label:"grpc",permalink:"/blog/tags/grpc"},{label:"mqtt",permalink:"/blog/tags/mqtt"},{label:"node-red",permalink:"/blog/tags/node-red"}],readingTime:5.46,truncated:!0,authors:[{name:"Gunnar Inge G. Sortland",title:"Software Engineer @ wgtwo",url:"https://www.linkedin.com/in/gunnaringe/",imageURL:"https://media-exp1.licdn.com/dms/image/C4E03AQFnInHIEXjS7w/profile-displayphoto-shrink_400_400/0/1516312934330?e=1648684800&v=beta&t=FafxE3bOUsOclBJCs5mN2iXXnu3ifBW83TbjDgItL0c"}],prevItem:{title:"Kafka timers",permalink:"/blog/kafka-timers"},nextItem:{title:"Forbidden lore: hacking DNS routing for k8s",permalink:"/blog/forbidden-lore-hacking-dns-routing-for-k8s"}},c={authorsImageUrls:[void 0]},g=[{value:"Connecting to <strong>wgtwo</strong>&#39;s API",id:"connecting-to-wgtwos-api",children:[],level:2},{value:"Connecting to our new MQTT service",id:"connecting-to-our-new-mqtt-service",children:[],level:2},{value:"Wrapping it all up",id:"wrapping-it-all-up",children:[],level:2}],m={toc:g};function p(e){var t=e.components,s=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Last hackathon I did setup a MQTT integration towards ",(0,a.kt)("strong",{parentName:"p"},"wgtwo"),"'s APIs to enable call notifications via my IKEA Tr\xe5dfri bulb so I can finally notice my wife calling me. The bulb changes color when my phone is ringing and when I am in a call, without me needing to install anything to my phone."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5943).Z})),(0,a.kt)("hr",null),(0,a.kt)("p",null,"There are a variety of events generated by ",(0,a.kt)("strong",{parentName:"p"},"wgtwo"),"\u2019s systems for subscriptions on the platform. This includes information such as call events, SMS sent to and from a subscription (including content), voicemail events, location events, and more."),(0,a.kt)("p",null,"We offer a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.wgtwo.com/events/listen-for-events/"},"gRPC API")," which enables developers to listen to a selection of these events."),(0,a.kt)("p",null,"I wanted to make a super simple setup so that I could configure home automation rules, e.g. ",(0,a.kt)("strong",{parentName:"p"},'"If someone calls me, make my IKEA bulb change color to notify me"')," or ",(0,a.kt)("strong",{parentName:"p"},"\"If I send myself a SMS with 'Leaf ON', turn on the heater in my car\""),"."),(0,a.kt)("p",null,"A lot of home automation tools, such as Node-RED and Home Assistant have great MQTT support, so instead of writing a native gRPC integration I wanted to make a more flexible solution by offering these events over MQTT. This way, anyone using a home automation tool with MQTT support can integrate with our platform easily."),(0,a.kt)("p",null,"During our last hackathon I built a simple bridge between our events API and MQTT. I wrote this bridge in Go, using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mochi-co/mqtt"},"Mochi MQTT")," as an embedded MQTT server."),(0,a.kt)("p",null,"The flow is shown in this sketch:\n",(0,a.kt)("img",{src:n(4207).Z})),(0,a.kt)("p",null,"The way it works is quite simple: You log in to the service using our OAuth solution. You then grant the service access to fetch events on your behalf. The service will then generate a username and password for you."),(0,a.kt)("p",null,"The service will fetch events for all subscribers that have enabled it and publish these to the MQTT server with topic ",(0,a.kt)("inlineCode",{parentName:"p"},"{phone number}/events/{type}"),". With the generated credentials, you may then subscribe to these events."),(0,a.kt)("p",null,"Note that nothing of this requires any setup on your phone, so it would work equally well on a 20-30 year old Nokia phone."),(0,a.kt)("p",null,"As I'll explain in more detail below, I did setup a quick Node-RED flow to consume these events as shown in the video below:"),(0,a.kt)("h1",{id:"video"},(0,a.kt)("a",{target:"_blank",href:n(2115).Z},"video")),(0,a.kt)("p",null,"Here you can see that:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The light changes to cool white when the call is initiated (phone not yet ringing)"),(0,a.kt)("li",{parentName:"ol"},"It turns pink when the phone is ringing"),(0,a.kt)("li",{parentName:"ol"},"It turns red when we pick up the call"),(0,a.kt)("li",{parentName:"ol"},"It returns to normal after the call has ended")),(0,a.kt)("h2",{id:"connecting-to-wgtwos-api"},"Connecting to ",(0,a.kt)("strong",{parentName:"h2"},"wgtwo"),"'s API"),(0,a.kt)("p",null,"We will use a normal OAuth2 authorization code grant for logging in to our service."),(0,a.kt)("p",null,"To handle this, we used the module ",(0,a.kt)("inlineCode",{parentName:"p"},"github.com/markbates/goth")," with the following settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "golang.org/x/oauth2"\n\nconst endpointProfile string = "https://id.wgtwo.com/userinfo"\n\nvar Endpoint = oauth2.Endpoint{\n  AuthURL:  "https://id.wgtwo.com/oauth2/auth",\n  TokenURL: "https://id.wgtwo.com/oauth2/token",\n}\n')),(0,a.kt)("p",null,"When logging in, the user will be asked to consent to the following scopes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"phone: Allowing the service to fetch the user\u2019s phone number"),(0,a.kt)("li",{parentName:"ul"},"offline_access: Giving the service a refresh token"),(0,a.kt)("li",{parentName:"ul"},"events.voice.subscribe: Allow the service to see all call events"),(0,a.kt)("li",{parentName:"ul"},"events.voicemail.subscribe: Allow the service to see if a voicemail has been left"),(0,a.kt)("li",{parentName:"ul"},"events.sms.subscribe: Allow the service to get a copy of every SMS sent and received")),(0,a.kt)("p",null,"All the events you have consented to share with the service will be stored in the service's queue."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sms events        \u2500\u256e\nvoice events      \u2500\u253c\u2500\u25b7  queue  \u25c1\u2500\u2500 gRPC API\nvoice mail events \u2500\u256f\n")),(0,a.kt)("p",null,"This queue can be consumed by using the events streaming API (",(0,a.kt)("a",{parentName:"p",href:"https://docs.wgtwo.com/events/listen-for-events/"},"docs"),"), which requires the service to use the OAuth2 client credentials grant flow."),(0,a.kt)("p",null,"Events will be shared with the service as long as there exists an active consent."),(0,a.kt)("p",null,"We then initiate the server side stream to fetch the events:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'request := &pb.SubscribeEventsRequest{\n  Type:          []pb.EventType{pb.EventType_VOICEMAIL_EVENT},\n  StartPosition: &pb.SubscribeEventsRequest_StartAtOldestPossible{},\n  ClientId:      uuid.New().String(),\n  QueueName:     "wgtwo-mqtt-demo",\n  DurableName:   "wgtwo-mqtt-demo",\n  MaxInFlight:   10,\n  ManualAck: &pb.ManualAckConfig{\n     Enable:  true,\n     Timeout: ptypes.DurationProto(10 * time.Second),\n  },\n}\nr, err := c.Subscribe(context.TODO(), request)\n\nfor {\n  response, err := r.Recv()\n  if err == io.EOF || err != nil {\n     break\n  }\n\n  event := response.Event\n  // PUBLISH EVENT TO MQTT SERVER ON TOPIC {event owner}/events/{type}\n}\n')),(0,a.kt)("h2",{id:"connecting-to-our-new-mqtt-service"},"Connecting to our new MQTT service"),(0,a.kt)("p",null,"The service has a very pretty landing page (Disclaimer: I am not a designer)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"landing page",src:n(3222).Z})),(0,a.kt)("p",null,"Clicking this button takes you to the login page:"),(0,a.kt)("div",{class:"post-images halves",markdown:"1"},"![](/img/blog/mqtt-event-bridge/login-enter-phonenumber.png) ![](/img/blog/mqtt-event-bridge/login-pin.png)"),(0,a.kt)("p",null,"\u2026 and then asks you to allow our service to get your voice event and new voicemails. As I am only interested in the voice events here, I\u2019ll only grant that."),(0,a.kt)("p",null,"As this is an experimental app which hasn\u2019t been approved by anyone, our login page will give you a clear warning about trusting this."),(0,a.kt)("div",{class:"post-images single",markdown:"1"},"![](/img/blog/mqtt-event-bridge/login-consent.png)"),(0,a.kt)("p",null,"When that is done, it returns to our app showing this beautiful UI (still not a designer):"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5585).Z})),(0,a.kt)("p",null,"The generated credentials will allow you to listen any topic matching ",(0,a.kt)("inlineCode",{parentName:"p"},"{phone number}/#"),"."),(0,a.kt)("p",null,"The following is the output from pasting that mosquitto_sub command in my terminal. It shows that I first called my Swedish number and hanging up before it was actually ringing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"event":{"metadata":{"sequence":"1","ackInbox":"_INBOX.VMTx7rnS0i3qXpHfuS5t3b"},"timestamp":"2021-01-06T11:24:40Z","serviceId":"wotel","voiceEvent":{"callId":"0c056e2c-07f9-4c2b-b5ca-042f160af42f","type":"CALL_INITIATED","fromNumber":{"e164":"+4712345678"},"toNumber":{"e164":"+46123456789"},"owner":{"e164":"+46123456789"}}}}\n{"event":{"metadata":{"sequence":"2","ackInbox":"_INBOX.VMTx7rnS0i3qXpHfuS5t3b"},"timestamp":"2021-01-06T11:24:43Z","serviceId":"wotel","voiceEvent":{"callId":"0c056e2c-07f9-4c2b-b5ca-042f160af42f","type":"CALL_ENDED","fromNumber":{"e164":"+4712345678"},"toNumber":{"e164":"+46123456789"},"owner":{"e164":"+46123456789"}}}}\n')),(0,a.kt)("p",null,"If you run any home automation or other hobby projects at home, chances are that you already have a MQTT broker running.\nYou could then setup bridging to not worry about credentials and TLS when consuming your events."),(0,a.kt)("h2",{id:"wrapping-it-all-up"},"Wrapping it all up"),(0,a.kt)("p",null,"For this project I chose to use Node-RED, as it allows for very quick and easy to show drag-and-drop integrations."),(0,a.kt)("p",null,"To control the lamp, we did add the module ",(0,a.kt)("inlineCode",{parentName:"p"},"node-red-contrib-tradfri")," as described in the Node-RED ",(0,a.kt)("a",{parentName:"p",href:"https://flows.nodered.org/node/node-red-contrib-tradfri"},"documentation"),"."),(0,a.kt)("p",null,"First we did add a ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt out")," node configured to listen to the topic 46123456789/# with output as a parsed JSON object using the credentials we got on login."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5336).Z})),(0,a.kt)("p",null,"We then simply hooked its output to a debug node. Looking at the output, we can see that the event object has a key ",(0,a.kt)("inlineCode",{parentName:"p"},"voiceEvent"),", as this is a voice event."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2101).Z})),(0,a.kt)("p",null,"Then we added a switch for handling it as a voice event if the voiceEvent key exists. Likewise, we added a new switch on the type field of that event."),(0,a.kt)("p",null,"Each of those functions simply set the Tr\xe5dfri payload, as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"state":"on","color":"cool daylight"}\n')),(0,a.kt)("p",null,"As this was created quickly as a hackathon project, the intention was never to actually make anything useful. Using this quick flow, it is however clear that it could be very useful for when my wife tries to call me, but I am programming equipped with my noise-cancelling headphones."))}p.isMDXComponent=!0},2115:function(e,t,n){t.Z=n.p+"assets/files/calling-c705f71e862ebe9c9611db0cf4d5244e.mp4"},5943:function(e,t,n){t.Z=n.p+"assets/images/animation-0c11cc8b3879ebb39b1d24e3a5064e2c.webp"},3222:function(e,t){t.Z="data:image/png;base64,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"},5336:function(e,t,n){t.Z=n.p+"assets/images/nodered-debug-d8a10d5399f2a33887d3237d43e8e4bf.png"},2101:function(e,t,n){t.Z=n.p+"assets/images/nodered-flow-958c30eb5b4cf4b283249d90f1f81122.png"},4207:function(e,t,n){t.Z=n.p+"assets/images/sketch-8ae1c400a05f7ec61c39047a01f21288.svg"},5585:function(e,t,n){t.Z=n.p+"assets/images/success-f636e03c8edb08ab9b6418c1311e02ec.png"}}]);