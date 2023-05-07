import clsx from "clsx";
import styles from './Stats.module.css'
function Stats(stats) {
    const keys = [
        'hp',
        'attack',
        'defense',
        'special-attack',
        'special-defense',
        'speed'
    ];
    const labels = [
        'hp',
        'attack',
        'defense',
        'special attack',
        'special defense',
        'speed'
    ]
    let STATS_VALUE = []
    let bgClassValue = [
        'BGhp', 'BGattack', 'BGdefense', 'BGs_attack', 'BGs_defense', 'BGspeed'
    ]
    let value = {};
    let indexClass = 0;
    for (let key of keys) {
        value[key] = {
            bgClass: bgClassValue[indexClass],
            value: stats[key] / 15
        }
        indexClass++;
        STATS_VALUE.push(Math.floor(value[key].value))
    }
    function Render_A_Stat(label, key_value, value, bgColor) {

        return (
            <div className={clsx(`${styles.statItem} d-flex flex-column`)}>
                {
                    Array(15).fill(1).map((item, index) => {
                        return (
                            (index < 15 - value) ?
                                (
                                    <div key={index} style={{ width: "60px", height: "10px", backgroundColor: "#fff", margin: "3px" }}>
                                    </div>
                                )
                                :
                                (
                                    <div key={index} className={clsx(`${bgColor} border_1px_semiblack`)} style={{ width: "60px", height: "10px", backgroundColor: "#ddd", margin: "3px" }}>
                                    </div>
                                )
                        )
                    })
                }
                <strong className={clsx(`${styles.labelStat}`)}>{label}</strong>
                <div className={clsx(`${styles.statModal}`)}>
                    <span>{label} {key_value.toFixed(2)}</span>
                </div>
            </div>
        )
    }

    return (
        <div className={clsx(`${styles.WrapperStats}`)}>

            {
                labels.map((item, index) => {
                    return (
                        <div key={index}>
                            {Render_A_Stat(item, value[keys[index]].value, STATS_VALUE[index], bgClassValue[index])}
                        </div>
                    )
                })
            }

        </div>
    )

}
export default Stats;