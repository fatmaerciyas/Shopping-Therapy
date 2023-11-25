export default function Footer() {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container relative text-center">
          <div className="grid md:grid-cols-2 items-center">
            <div className="md:text-start text-center">
              <p className="mb-0">
                <p>Graduation Project</p>
                <i className="mdi mdi-heart text-red-600"></i> by Fatma Erciyas
              </p>
            </div>

            <ul className="list-none md:text-end text-center mt-6 md:mt-0">
              <li className="inline">
                <a href="#">
                  <img
                    src="assets/images/payments/american-ex.png"
                    className="max-h-6 inline"
                    title="American Express"
                    alt=""
                  />
                </a>
              </li>
              <li className="inline">
                <a href="#">
                  <img
                    src="assets/images/payments/discover.png"
                    className="max-h-6 inline"
                    title="Discover"
                    alt=""
                  />
                </a>
              </li>
              <li className="inline">
                <a href="#">
                  <img
                    src="assets/images/payments/master-card.png"
                    className="max-h-6 inline"
                    title="Master Card"
                    alt=""
                  />
                </a>
              </li>
              <li className="inline">
                <a href="#">
                  <img
                    src="assets/images/payments/paypal.png"
                    className="max-h-6 inline"
                    title="Paypal"
                    alt=""
                  />
                </a>
              </li>
              <li className="inline">
                <a href="#">
                  <img
                    src="assets/images/payments/visa.png"
                    className="max-h-6 inline"
                    title="Visa"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
