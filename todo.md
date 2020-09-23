# Learn about https://localforage.github.io/localForage/

# Shopping cart research
https://stackoverflow.com/questions/2827764/ecommerceshopping-cartwhere-should-i-store-shopping-cart-data-in-session-or

Of course shopping cart data is a critical data. Where to save this data it depends on that user which your e-commerce system works.

With Not Signed (yet) users - You have to save this data on web storage, html5 gives you ability for this.Simple using Front End Storage, which equips any Browser (Cookie, Session Storage, Local Storage). On checkout process system must require sign up from user. After sign up you have to synchronize this data with Database. Otherwise you have not to save this untraceable data on Database.

With Signed users - of course in Database. With this way you can correctly trace Basket of user. If user will sign in from any where you can show her his account and "items for pending payment". And saving this data on Browser storage it depend on your taste.

# Improve REST API, add delete, put, patch

# Improve UnitTesting. Delete test data!