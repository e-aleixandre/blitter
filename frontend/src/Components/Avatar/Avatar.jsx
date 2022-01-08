import md5 from "blueimp-md5";

const Avatar = (props) => {
    const hash = md5(props.address);
    const url = `https://www.gravatar.com/avatar/${hash}?d=retro&f=y&s=128`;

    return (
        <div className="w-16 mr-2">
            <img src={url} alt="" className="p-2 rounded-full" />
      </div>
    );
}

export default Avatar;
