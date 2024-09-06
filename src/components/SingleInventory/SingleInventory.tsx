import Button from '../Button/Button'
import { getListFromLocalStorage, magasins, produits } from '../../utils'
import Modal from '../Modal/Modal'
import cross from '../../assets/cross-svgrepo-com.svg'
import edit from '../../assets/edit-svgrepo-com.svg'
import { useState } from 'react'

interface SingleInventoryProps {
    index: number;
    val: Inventaire; // Permet d'accepter des enfants
}
const SingleInventory = ({ index, val }: SingleInventoryProps) => {
    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const [date, setDate] = useState<Date>(new Date(val.date))
    const [produitId, setProduitId] = useState(val.produitId)
    const [stock, setStock] = useState(val.stock)

    const values = getListFromLocalStorage('evoSoftInventory');

    const handleStock = (value: string, magasinId: string) => {
        setStock({ ...stock, [magasinId]: parseInt(value) })
    }

    const save = (e: React.FormEvent) => {
        e.preventDefault();

        const data = {
            date: date,
            produitId: produitId,
            stock: stock
        };
        console.log(data);
        values[index] = data

        localStorage.setItem('evoSoftInventory', JSON.stringify(values))
        setIsOpenEdit(false)
        location.reload();
    }
    return (
        
        <>
        <tr key={index} className='w-full '>
            <td>{index}</td>
            <td>{val.date.substring(0, 10)}</td>
            <td>{val.produitId}</td>
            <td>{JSON.stringify(val.stock)}</td>
            <td className='text-green-600'><img src={edit} alt="edit" className='h-5 aspect-square cursor-pointer hover:scale-110 transition-all ' onClick={() => setIsOpenEdit(true)} /></td>
        </tr>

        <Modal isOpen={isOpenEdit}>
            <section className="form bg-white h-4/5 aspect-square overflow-y-auto px-5 py-7 shadow-xl relative">
                <h1 className='my-0 font-semibold'>Edit SingleInventory</h1>
                <img src={cross} alt="cross" className='absolute top-4 right-4 h-5 aspect-square cursor-pointer hover:scale-110 transition-all' onClick={() => setIsOpenEdit(false)} />

                <form action="" className='flex flex-col gap-4 '>

                    <div className='flex flex-col'>
                        <label htmlFor="date" className='mt-5 mb-1'>Date</label>
                        <input type="date" name="date" className="input  my-0 py-2 px-4 bg-slate-200" placeholder="Date" value={val.date}  onChange={(e) => setDate(new Date(e.target.value))}  />
                    </div>

                    <select name="produit" id="produit" className="input my-0 py-2 px-4 bg-slate-200" defaultValue={val.produitId} onChange={(e) => setProduitId(e.target.value)} >
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

                                    <input type="number" name="stock" className="input my-0 py-2 px-4 bg-slate-200" placeholder="Stock" defaultValue={val.stock[magasin.id]} onChange={(e) => handleStock(e.target.value, magasin.id)} />

                                </div>
                            )
                        })
                    }
                    <div>
                        <Button text='Save' onClick={(e) => save(e)} />
                    </div>
                </form>
            </section>
        </Modal>
    </>
    )
}

export default SingleInventory