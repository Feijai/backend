import { sideBarProps } from '../GlobalInterface'

export const chooseProcess = (key: string, data: sideBarProps[]) => {
    let ans: sideBarProps[] = []
    data.map(ele => {
        ele.choose = false
        ans.push(ele)
    })
    let choose = data.filter((ele) => ele.name === key)[0]
    const idx = data.indexOf(choose)
    choose.choose = true;
    ans.splice(idx, 1, choose)
    return ans
}