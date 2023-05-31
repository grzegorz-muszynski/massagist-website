import react from 'react';
import "./Vouchers.css";

export default function Vouchers() {

    return (
        <div className='Vouchers'>
            <h1>Karty podarunkowe</h1>
            <p>Zamów voucher już teraz w formie elektronicznej przez <a href="https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow?do=invite&_branch_match_id=1016433891075084321&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL4wy9K4MMipPrUwCAFgQoA4iAAAA">portal Booksy</a> wciskając przycisk "Zobacz Karty podarunkowe", lub odbierz kartę osobiście zamawiając ją telefonicznie, bądź przez SMS pod numerem <span>57 58 57 130</span>.</p>

            <p>Możesz wybrać bon na <span>dowolną kwotę</span> składając zamówienie przez telefon, lub skorzystać z jednej z gotowych opcji do wyboru dostępnych <a href="https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow?do=invite&_branch_match_id=1016433891075084321&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL4wy9K4MMipPrUwCAFgQoA4iAAAA">on-line</a>:</p>
            <p className="Vouchers__cards">Bon Max - 160 zł</p>
            <p className="Vouchers__cards">Karta podarunkowa - 100 zł</p>
            <p className="Vouchers__cards">Karta podarunkowa full - 300 zł</p>
            <p className="Vouchers__cards">Karta podstawowa - już od 70 zł</p>
        </div>
    )
}