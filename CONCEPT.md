## The Problem
I think we all can agree that Bitcoin's biggest Problem, after we implement the Lightning Network, is that it is so hard to use. When I asked my dad a few days ago if he considers buying Bitcoins he said that he actually was about to buy some but then he got scared by all the different words that got thrown at him when he read about how to buy some. After an hour he managed to set up a Wallet and thought he could finally buy some but then he realized that he still had to chose an exchange, create another account and verify his identity at which point he just gave up.

If this happened to my dad I am sure that the complexity of Bitcoin is holding many other, potential users, back from buying some and helping Bitcoin to become a mainstream currency and not just a way for us nerds to send money to each others and gamble on its price.

## We can solve this
So, in order for Bitcoin to actually become a mainstream currency and being accepted by big companies we need to simplify the whole flow of it. We need to minimize the required knowledge of the user because many do not care how it works, but that it works. The majority of people have other things to do than reading multiple-page-long articles on how to buy Bitcoin and how to store them. Most people just want to download an app and be ready to go.

Our goal is to make this possible and minimize the required knowledge to the point where spending and buying Bitcoins is as easy as swiping a credit card or typing in credit card credential and just recieving the coins, not having to create multiple accounts on exchanges.

CRYPT is not trying to be just another Wallet but will be a Wallet which even your grandmother can use with ease. It will hide all information that she doesn't know what it means and will introduce new concepts so things like Lightning Channels can be hidden and managed without the user having to care about them.

## The Lightning Network makes it worse
Even though the Lightning Network solves a huge problem with Bitcoin it also creates new problems for us developers. With the introduction of Lightning channels it will be even harder to make a wallet everyone can use without having to read Wikipedia articles. But it doesn't mean that it is impossible to make the perfect Lightning-ready Wallet. It is just a lot harder. With CRYPT we are introducing a few concepts new to the world of Bitcoin Wallets. Some of these are listed here.

## CRYPT has two Accounts
So, you probably already know how the Lightning Network works and what channels are. But try explaining this to your grandmother in one sentence! With CRYPT we will bundle all channels into one account called "Cash" and the plain Bitcoin Segwit Wallet will be called "Savings". All the user has to know is that he can transfer money from savings to cash and from cash to savings, but when he wants to pay for something from his Savings Wallet it takes time and costs fees. So he knows that whenever he wants to buy something he should use his Cash Account because it is fast and almost free. He can define how much money he wants to have in his cash account so whenever the balance in there is under a certain threshold it will be refilled automatically from his savings Wallet.

Under the hood this works by having many smaller channels and when one is closed another one is opened. That way the user will never have to know what a channel is and will never have to open one by himself. This is just one concept that CRYPT introduces on its journey to make Bitcoin become a mainstream currency!