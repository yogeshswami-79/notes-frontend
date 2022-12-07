const COLORS = [ '#fff0f3' , '#ffccd5' , '#ffb3c1' , '#ff8fa3', '#ff758f', '#f5e6e8', '#d5c6e0', '#aaa1c8', '#9bf6ff', '#caffbf', '#ffadad', '#a9d6e5' ]

function getColor(val){
    return COLORS[(val)%COLORS.length];
}

export default {COLORS, getColor};