import React from 'react';
import { motion } from 'framer-motion';
import { textAnimation, tableAnimation } from '../utils/animation';

function Competition(props) {
    return (
        <motion.section
            viewport={{ amount: 0.25, once: true }}
            initial='hidden'
            whileInView='visible'
            className='competition'
        >
            <motion.h2 variants={textAnimation} className='competition__title'>
                The competition is no match
            </motion.h2>
            <motion.div
                viewport={{ amount: 0.25, once: true }}
                initial='hidden'
                whileInView='visible'
                variants={tableAnimation}
                className='competition__table-container'
            >
                <table className='table'>
                    <thead className='table__header'>
                        <tr className='table__row'>
                            <th className='table__header-cell'></th>
                            <th className='table__header-cell'>
                                Awesome Container Company
                            </th>
                            <th className='table__header-cell'>Deliver Zero</th>
                            <th className='table__header-cell'>
                                Logistics Company
                            </th>
                            <th className='table__header-cell'>
                                Washing Facility
                            </th>
                            <th className='table__header-cell'>
                                Single-use plastics
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                Save over 50% on supply costs
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                Save real estate storage costs
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                Inventory management
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                Never reorder supplies
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                Easy pickup and delivery
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'>&nbsp;</td>
                            <td className='table__cell'>
                                <div className='table__cell-point' />
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point' />
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point' />
                            </td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                Sustainable products
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'>
                                <div className='table__cell-point' />
                            </td>
                            <td className='table__cell'></td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                App for tracking and reporting
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'>
                                <div className='table__cell-point' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                        </tr>
                    </tbody>
                </table>
            </motion.div>
        </motion.section>
    );
}

export default Competition;
