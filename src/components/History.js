import { useEffect, useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "./History.scss";
import { Storage } from "@aws-amplify/storage";

const History = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    Storage.list("photos/")
      .then((result) => {
        const urls = result.map((item) => {
          return Storage.get(item.key);
        });
        Promise.all(urls)
          .then((data) => {
            setImageUrls(data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="historyContainer">
          <button className="btn" onClick={signOut}>
            signOut
          </button>
          <div className="imageContainer">
            {imageUrls.map((url, index) => (
              <img src={url} alt={`Image ${index}`} key={`image${index}`} />
            ))}
          </div>
        </div>
      )}
    </Authenticator>
  );
};

export default History;