
import { useState } from 'react';
import Button from '../components/Button/Button'
import Modal from '../components/Modal/Modal';
import '../styles/inventory.scss'

import cross from '../assets/cross-svgrepo-com.svg'

import { appendToList, getListFromLocalStorage, magasins, produits } from '../utils';
import SingleInventory from '../components/SingleInventory/SingleInventory';
const Inventory = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [date, setDate] = useState<Date>(new Date())
    const [produitId, setProduitId] = useState('')
    const [stock, setStock] = useState<Inventaire[]>([])

    const [error, setError] = useState('')

    const values = getListFromLocalStorage('evoSoftInventory');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        if (produitId === '' || stock.length === 0) {
            if (produitId === '') {
                setError('Veuillez selectionner un produit')
            }
            if (stock.length === 0) {
                setError('Veillez entrer le stock')
            }
        } else {
            setError('')
            const data = {
                date: date,
                produitId: produitId,
                stock: stock
            };
            console.log(data);
            if (!values) {
                localStorage.setItem('evoSoftInventory', JSON.stringify([data]));
            } else {
                appendToList('evoSoftInventory', data)
            }
            setIsOpen(false)
            location.reload();
        }
    }
    const handleStock = (value: string, magasinId: string) => {
        setStock({ ...stock, [magasinId]: parseInt(value) })
    }
    
    console.table(values)

    const exportToCSV = () => {
        const table = document.getElementById('data');
        const rows = Array.from(table.rows);
        const csvContent = rows.map(row => {
            const cells = Array.from(row.cells).map(cell => cell.textContent).join(',');
            return cells;
        }).join('\n');
    
        // Créer un lien pour télécharger le fichier CSV
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    
    return (
        <main className='inventory'>
            <section className="content">
                <Button text='Add Inventory' onClick={() => setIsOpen(true)} />
                <div className="divider" />
                <div className="table-container">
                    {
                        values ?
                            <table className="inventory-list mt-7 " id='data'>
                                <thead>
                                    <tr className='w-full'>
                                        <th>id</th>
                                        <th>date</th>
                                        <th>product ID</th>
                                        <th>stock</th>
                                        <th>Action</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {
                                        values.map((val: Inventaire, i: number) => {
                                            return (
                                                <SingleInventory key={i} index={i} val={val} />
                                            )
                                        })
                                    }

                                </tbody>

                            </table>
                            : <div className='h-full w-full flex justify-center items-center'><h1 className='font-semibold font-mono text-2xl'>Inventory is empty</h1></div>
                    }

                </div>
                <Button text='Export to CSV' onClick={() => exportToCSV()} />
            </section>

            <Modal isOpen={isOpen}>
                <section className="form bg-white h-4/5 aspect-square overflow-y-auto px-5 py-7 shadow-xl relative">
                    <h1 className='my-0 font-semibold'>Create Inventory</h1>
                    <img src={cross} alt="cross" className='absolute top-4 right-4 h-5 aspect-square cursor-pointer hover:scale-110 transition-all' onClick={() => setIsOpen(false)} />

                    <form action="" className='flex flex-col gap-4 '>

                        <div className='flex flex-col'>
                            <label htmlFor="date" className='mt-5 mb-1'>Date</label>
                            <input type="date" name="date" className="input  my-0 py-2 px-4 bg-slate-200" placeholder="Date" onChange={(e) => setDate(new Date(e.target.value))} />
                        </div>

                        <select name="produit" id="produit" className="input my-0 py-2 px-4 bg-slate-200" onChange={(e) => setProduitId(e.target.value)}>
                            {
                                produits.map((produit, index) => {
                                    return (
                                        <option key={index} value={produit.id}>{produit.nom}</option>
                                    )
                                })
                            }
                        </select>

                        {
                            magasins.map((magasin, index) => {
                                return (
                                    <div key={index} className='flex flex-col'>
                                        <label htmlFor="magasin" className="input my-0 py-2 px-4 bg-slate-200">{magasin.nom}

                                        </label>

                                        <input type="number" name="stock" className="input my-0 py-2 px-4 bg-slate-200" placeholder="Stock" onChange={(e) => handleStock(e.target.value, magasin.id)} />

                                    </div>
                                )
                            })
                        }
                        {
                            error !== '' ? <p className='text-red-500 text-center'>{error}</p> : <div></div>
                        }
                        <div>
                            <Button text='Create Inventory' onClick={(e) => submit(e)} />
                        </div>
                    </form>
                </section>
            </Modal>
        </main>
    )
}

export default Inventory