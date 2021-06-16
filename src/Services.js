import React from 'react'
import Table from 'react-bootstrap/Table'
function Services() {
    return (
        <div className="content mt-3 p-3">
            <h3>Szolgáltatások</h3>
            <Table size="md" striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>Szolgáltatás Neve</th>
            <th>Szint</th>
            <th>Tartalma</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Számítógép/Laptop használata</td>
            <td>Kezdő</td>
            <td>Ismerkedés az operációs rendszerrel, internet használata</td>
            </tr>
            <tr>
            <td>Okostelefon/Tablet használata</td>
            <td>Kezdő</td>
            <td>Ismerkedés az okoskészülékekkel, hasznos alkalmazásokkal</td>
            </tr>
            <tr>
            <td>Készülékek karbantartása</td>
            <td>Kezdő</td>
            <td>Vírusok megakadályozása, rendszer sebességének fenntartása, alkalmazások frissítése</td>
            </tr>
            
        </tbody>
    </Table>
        </div>
    )
}

export default Services
