
import { useState } from 'react';
import Button from '../components/Button/Button'
import Modal from '../components/Modal/Modal';
import '../styles/inventory.scss'

import cross from '../assets/cross-svgrepo-com.svg'
import edit from '../assets/edit-svgrepo-com.svg'

import { appendToList, getListFromLocalStorage, magasins, produits } from '../utils';
const Inventory = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [date, setDate] = useState<Date>(new Date())
    const [produitId, setProduitId] = useState('')
    const [stock, setStock] = useState<Inventaire[]>([])

    const values = getListFromLocalStorage('evoSoftInventory');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

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

    }
    const handleStock = (value: string, magasinId: string) => {
        setStock({ ...stock, [magasinId]: parseInt(value) })
    }
    console.table(values)
    return (
        <main className='inventory'>
            <section className="content">
                <Button text='Add Inventory' onClick={() => setIsOpen(true)} />
                <div className="divider" />
                {
                    values ?
                        <table className="inventory-list w-4/5 mt-7 overflow-auto">
                            <tr className='w-full'>
                                <th>id</th>
                                <th>date</th>
                                <th>product ID</th>
                                <th>stock</th>
                                <th>Action</th>
                            </tr>

                            {
                                values.map((val: Inventaire, i: number) => {
                                    return (
                                        <tr key={i} className='w-full '>
                                            <td>{i}</td>
                                            <td>{val.date.substring(0, 10)}</td>
                                            <td>{val.produitId}</td>
                                            <td>{JSON.stringify(val.stock)}</td>
                                            <td className='text-green-600'><img src={edit} alt="edit" className='h-5 aspect-square cursor-pointer hover:scale-110 transition-all ' onClick={() => setIsOpen(true)} /></td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                        : <div className='h-full w-full flex justify-center items-center'><h1 className='font-semibold font-mono text-2xl'>Inventory is empty</h1></div>
                }
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