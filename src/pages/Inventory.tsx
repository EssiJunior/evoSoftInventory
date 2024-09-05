
import { useState } from 'react';
import Button from '../components/Button/Button'
import Modal from '../components/Modal/Modal';
import '../styles/inventory.scss'

import cross from '../assets/cross-svgrepo-com.svg'
import { magasins, produits } from '../utils';
const Inventory = () => {
    const [isOpen, setIsOpen] = useState(false)
    const value = localStorage.getItem('evoSoftInventory');
    console.log(value);

    return (
        <main className='inventory'>
            <section className="content">
                <Button text='Add Inventory' onClick={() => setIsOpen(true)} />
                <div className="divider" />
                {
                    value ? <div className="inventory-list">
                        <h1>{value}</h1>
                    </div> : <div className='h-full w-full flex justify-center items-center'><h1 className='font-semibold font-mono text-2xl'>Inventory is empty</h1></div>
                }
            </section>
            <Modal isOpen={isOpen}>
                <section className="form bg-white h-4/5 aspect-square overflow-y-auto px-5 py-7 shadow-xl relative">
                    <h1 className='my-0 font-semibold'>Create Inventory</h1>
                    <img src={cross} alt="cross" className='absolute top-4 right-4 h-5 aspect-square cursor-pointer hover:scale-110 transition-all' onClick={() => setIsOpen(false)} />

                    <form action="" className='flex flex-col gap-4 '>

                        <div className='flex flex-col'>
                            <label htmlFor="date" className='mt-5 mb-1'>Date</label>
                            <input type="date" name="date" className="input  my-0 py-2 px-4 bg-slate-200" placeholder="Date" />
                        </div>

                        <select name="produit" id="produit" className="input my-0 py-2 px-4 bg-slate-200">
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

                                        <input type="number" name="stock" className="input my-0 py-2 px-4 bg-slate-200" placeholder="Stock" />

                                    </div>
                                )
                            })
                        }
                        <div>
                            <Button text='Create Inventory' />
                        </div>
                    </form>
                </section>
            </Modal>
        </main>
    )
}

export default Inventory