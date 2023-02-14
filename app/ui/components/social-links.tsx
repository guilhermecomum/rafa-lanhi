type SocialLinkProps = {
  white?: boolean;
};

function SocialLinks({ white }: SocialLinkProps) {
  return (
    <div className="flex items-center space-x-2">
      <a
        className="inline-block"
        href="https://api.whatsapp.com/send/?phone=5551981030730&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        {white ? (
          <img
            className="w-5 h-5 fill-green"
            alt="icone whatsapp"
            src="/assets/icons/whatsapp-white.svg"
          />
        ) : (
          <img
            className="w-5 h-5 fill-green"
            alt="icone whatsapp"
            src="/assets/icons/whatsapp.svg"
          />
        )}
      </a>
      <a
        className="inline-block"
        href="https://instagram.com/rafalanhifisio?igshid=NTA5ZTk1NTc="
        target="_blank"
      >
        {white ? (
          <img
            className="w-5 h-5"
            alt="icone instagram"
            src="/assets/icons/instagram-white.svg"
          />
        ) : (
          <img
            className="w-5 h-5"
            alt="icone instagram"
            src="/assets/icons/instagram.svg"
          />
        )}
      </a>
      <a
        className="inline-block"
        href="https://www.facebook.com/profile.php?id=100088214301403&mibextid=ZbWKwL"
        target="_blank"
      >
        {white ? (
          <img
            className="w-5 h-5"
            alt="icone facebook"
            src="/assets/icons/facebook-white.svg"
          />
        ) : (
          <img
            className="w-5 h-5"
            alt="icone facebook"
            src="/assets/icons/facebook.svg"
          />
        )}
      </a>
      <a href="mailto:rafalanhi@gmail.com">
        {white ? (
          <img
            className="w-5 h-5"
            alt="icone email"
            src="/assets/icons/email-white.svg"
          />
        ) : (
          <img
            className="w-5 h-5"
            alt="icone email"
            src="/assets/icons/email.svg"
          />
        )}
      </a>
    </div>
  );
}
export { SocialLinks };
