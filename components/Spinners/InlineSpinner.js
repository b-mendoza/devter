const InlineSpinner = () => {
  return (
    <>
      <div className="spinner">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <style jsx>{`
        .spinner {
          margin: 10rem auto;

          width: 4rem;
          height: 4rem;

          position: relative;

          animation: sk-rotate 2s infinite linear;
        }

        .dot:nth-child(1),
        .dot:nth-child(2) {
          width: 60%;
          height: 60%;

          display: inline-block;

          position: absolute;

          top: 0;

          background: linear-gradient(
            90deg,
            rgba(67, 97, 238, 1) 0%,
            rgba(63, 55, 201, 1) 100%
          );

          border-radius: 100%;

          animation: sk-bounce 2s infinite ease-in-out;
        }

        .dot:nth-child(2) {
          top: auto;
          bottom: 0;

          -webkit-animation-delay: -1s;
          animation-delay: -1s;
        }

        @-webkit-keyframes sk-rotate {
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes sk-rotate {
          100% {
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
          }
        }

        @-webkit-keyframes sk-bounce {
          0%,
          100% {
            -webkit-transform: scale(0);
          }

          50% {
            -webkit-transform: scale(1);
          }
        }

        @keyframes sk-bounce {
          0%,
          100% {
            transform: scale(0);
            -webkit-transform: scale(0);
          }

          50% {
            transform: scale(1);
            -webkit-transform: scale(1);
          }
        }
      `}</style>
    </>
  )
}

export default InlineSpinner
