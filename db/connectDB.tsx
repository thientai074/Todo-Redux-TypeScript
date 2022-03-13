import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://thientai074:thientai077@cluster0.fn5pj.mongodb.net/ToDo-Next', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Ket noi Database thanh cong !!!!')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB