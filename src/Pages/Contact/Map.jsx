import React from "react";

const Map = () => {
  return (
    <>
      <div className="block ">
        <div class="relative w-full h-96">
          <iframe
            class="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.925625386833!2d78.7898292445985!3d10.383286335879516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00782d25029679%3A0x4503e2d3b4a3897f!2sPudukkottai%2C%20Tamil%20Nadu%20622003%2C%20India!5e0!3m2!1sen!2sus!4v1760078208534!5m2!1sen!2sus"
            frameborder="0"
            className="w-full h-full"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.925625386833!2d78.7898292445985!3d10.383286335879516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00782d25029679%3A0x4503e2d3b4a3897f!2sPudukkottai%2C%20Tamil%20Nadu%20622003%2C%20India!5e0!3m2!1sen!2sus!4v1760078208534!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
