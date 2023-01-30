type SocialLinkProps = {
  white?: boolean;
};

function SocialLinks({ white }: SocialLinkProps) {
  return (
    <div className="flex items-center space-x-2">
      <a
        className="inline-block"
        href="https://api.whatsapp.com/send/?phone=5551981030730&text&type=phone_number&app_absent=0"
      >
        {white ? (
          <img
            className="w-5 h-5 fill-green"
            src="/assets/icons/whatsapp-white.svg"
          />
        ) : (
          <img
            className="w-5 h-5 fill-green"
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
          <img className="w-5 h-5" src="/assets/icons/instagram-white.svg" />
        ) : (
          <img className="w-5 h-5" src="/assets/icons/instagram.svg" />
        )}
      </a>
      <a
        className="inline-block"
        href="https://www.facebook.com/profile.php?id=100088214301403&mibextid=ZbWKwL"
        target="_blank"
      >
        {white ? (
          <img className="w-5 h-5" src="/assets/icons/facebook-white.svg" />
        ) : (
          <img className="w-5 h-5" src="/assets/icons/facebook.svg" />
        )}
      </a>
      <a className="inline-block" href="" target="_blank">
        {white ? (
          <img className="w-5 h-5" src="/assets/icons/linkedin-white.svg" />
        ) : (
          <img className="w-5 h-5" src="/assets/icons/linkedin.svg" />
        )}
      </a>
    </div>
  );
}
export { SocialLinks };
