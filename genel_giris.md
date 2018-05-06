# Peer-to-Peer (P2P) 

İki yada daha fazla istemci arasında veri paylaşmak için kullanılan bir **ağ protokolüdür**.

- Tek seferde bir veriyi milyonlarca kişiye gönderme.
- **[ICQ](https://icq.com/)** bilgisayarlar arasında bağlantı olmadan mesajlaşmayı sağlayan ilk programdır.
- P2P ni ilk örneği **[Napster](https://us.napster.com/)** dır.

# Blokchain

**Önceden**
<p align="center">
  <img id="awesome-audio-visualization" src="images/bank.pnj" alt="Logo AAV">
</p>
```mermaid
graph LR
A[A Bank/Person] -- 100 tl  --> B((B Bank))
B -- 95 tl --> D[B Bank/Person]
A--1-3 gün--> D
```
- Satoshi bu alt yapıyı ortaya çıkarmadan önce birine para göndereceğimizde ilk olarak parayı bankaya gönderiyoruz. Sonra banka belli bir kesintiyle belli bir sürede göndermek istediğimiz yere ulaşıyor. Burada hem zaman hem de para kesintisiyle para kaybı yaşıyorduk.

**Satoshi Nakamoto dan sonra**

```mermaid
graph LR
A[A Bank/Person] -- 100 tl  -- -- 99.99 tl tl --> D[B Bank/Person]
```

- Satoshi Nakamoto geliştirdiği bu teknolojiyle aradan bankayı kaldırdı. Aradan bankanın kalkmasıyla bekleme süreside kalkmış oldu. Gerçekleştireceğimiz bir işlemi beklemeden gerçekleştirebiliyoruz. Ayrıca bankaların yaptı kesintide hatrı sayılır derecede düştü. Hem zaman hem de para kaybı ortadan kalmış oldu.

# Blockchain 

- Bilgi tutan protokol.
- Adresler biliniyorsa herkes herkesi takip edebilir.
- Adreslerin isim karşılığı yoktur.
- İşlene veri değiştirilemez.
- Herşey kayıt altında tutulur.
- Proof of work (ödül mekanizmasıyla verilerin doğruluğunu kontrol etme)
- Proof of stake (farklı bir doğrulama yöntemi)

**Hash(sha256)** **Asymetric keys(rsa512)** gibi şifreleme yöntemleri kullanılır.

# Ethereum

- Merkezi olmayan bilgisayar.

- Quorum -> J.P.Morgen : Blockchain alanında bağımsız bir şirket.

**Klasik internet iletişimi**

```mermaid
graph TD;
    A[Computer]-->B[Cloud];
    B[Cloud]--> C[Azure];
    B[Cloud]--> D[Amazon];
    B[Cloud]--> E[Alibaba];
   ```


**Ethereum iletişimi**

```mermaid

graph TD;
    A[Computer]---B[Computer];
    A[Computer]---C[Computer];
    B[Computer]---D[Computer];
    C[Computer]---D[Computer];
    D[Computer]---A[Computer];
    B[Computer]---C[Computer]
```

**Merkezi olmayan uygulamalar**
- Güvenli
- Seffaf
- Aracısız
- Tek bir noktadan yönetilmeyen

**Akıllı kontratlar**

- 24 Byte adres
- State : İşlem bilgilerinin tutulduğu alan.(Eski bilgiler değiştirilemez.)

# Solidity

- Ethereum Virtual Machine
- remix.ethereum.org
- metamask
- rinkeby.etherscan.io : contact adres kontrolü