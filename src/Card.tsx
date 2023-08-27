import "./index.css";

const BirthdayCard = () => {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">Chúc mừng sinh nhật vợ Ộc</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">Vợ Ộc sinh nhật vui vẻ</h3>
        <p>Vợ ơi,</p>
        <p>
          Sinh nhật lần thứ 2 của vợ và đây là sinh nhật vợ chồng mình ở cách xa
          nhau, nhưng chồng vẫn luôn nhớ yêu vợ, chồng dành cho vợ một món quà
          thật đặt biệt, chồng chúc vợ sẽ luôn vui vẻ, thành công và luôn mãi
          xinh đẹp vợ nhé!
        </p>
        <p className="name">Pawan</p>
      </div>
    </div>
  );
};

export default BirthdayCard;
