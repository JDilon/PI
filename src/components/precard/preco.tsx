import './style.css'

function Preco() {
  return (
    <div className='flex justify-center flex-wrap gap-5'>
      {/* Primeiro Card */}
      <div className="card bg-base-100 w-full sm:w-96 md:w-96 lg:w-96 shadow-xl p-5">
        <figure>
          <img
            src="https://as2.ftcdn.net/v2/jpg/08/54/86/51/1000_F_854865100_95d2mLmqDI69rsvSMUOLcSuAwbADGGJQ.jpg"
            alt="Plano Plus"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Plano Plus!</h2>
          <p>Plano com 100 leads qualificadas</p>
          <div className="stat-value">R$79,90</div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Saiba mais</button>
          </div>
        </div>
      </div>

      {/* Segundo Card */}
      <div className="card bg-base-100 w-full sm:w-96 md:w-96 lg:w-96 shadow-xl p-5">
        <figure>
          <img
            src="https://as2.ftcdn.net/v2/jpg/09/39/63/67/1000_F_939636780_QZ1rjPwQtFn90liPHVWbUdtEOCpPpzzW.jpg"
            alt="Plano Pro"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Plano Pro!</h2>
          <p>Plano com 300 leads qualificadas</p>
          <div className="stat-value">R$209,90</div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Saiba mais</button>
          </div>
        </div>
      </div>

      {/* Terceiro Card */}
      <div className="card bg-base-100 w-full sm:w-96 md:w-96 lg:w-96 shadow-xl p-5">
        <figure>
          <img
            src="https://as1.ftcdn.net/v2/jpg/09/14/06/54/1000_F_914065440_mvLWLmsTdgFUPZYKzcM2Q5TVzz2ZwDGZ.jpg"
            alt="Plano Plus"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Plano Pro Plus!</h2>
          <p>Plano com 1000 leads qualificadas</p>
          <div className="stat-value">R$499,90</div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Saiba mais</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preco;
