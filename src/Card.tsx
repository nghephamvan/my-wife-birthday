import "./index.css";
import ThuyNghe from "./assets/thuy.yeu.nghe.jpg";

const BirthdayCard = () => {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">
          Chúc mừng sinh nhật
          <br />
          vợ Ộc
        </h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">Vợ Ộc sinh nhật vui vẻ</h3>
        <p>
          Ộc ơi,
          <br /> Chồng chúc Ộc luôn vui vẻ, thành công và mãi xinh đẹp vợ nhé!
          sinh nhật vợ chồng mình ở xa nhau, nhưng tình cảm vợ chồng mình luôn
          dành cho nhau vợ nhé!
        </p>
        <p className="name">
          2023/09/11, Chồng của vợ <br />
          Nghệ
        </p>

        <img
          className="img"
          src={ThuyNghe}
          alt="Ộc"
          title="Ộc và Nghệ"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default BirthdayCard;
