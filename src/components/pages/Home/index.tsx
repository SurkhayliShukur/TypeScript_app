import Layout from "../../layout/Layout"
import { useFetchProducts } from "../../../common/GetCustom"
import moment from "moment"
import { copyColorCode } from "../../../utils/CopyColor"
import { useNavigate } from "react-router-dom"
import { ROUTER } from "../../../constant/Router"





const Home: React.FC = () => {

  const { datas, loading, error, fetchProducts } = useFetchProducts()



  return (
    <>
      <Layout>
        <div className="container py-10">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              
                   <tr>
                <th scope="col" className="px-5 py-3">
                  S.No
                </th>
                <th scope="col" className="px-5 py-3">
                  Title
                </th>
                <th scope="col" className="px-5 py-3">
                  Price
                </th>

                <th scope="col" className="px-5 py-3">
                  Discount
                </th>
                <th scope="col" className="px-5 py-3">
                  Rating
                </th>
                <th scope="col" className="px-5 py-3">
                  Stock
                </th>

                <th scope="col" className="px-5 py-3">
                  Category
                </th>

                <th scope="col" className="px-5 py-3">
                  Color
                </th>
                <th scope="col" className="px-5 py-3">
                  Image
                </th>
                <th scope="col" className="px-5 py-3">
                  Added_Time
                </th>
                <th scope="col" className="px-5 py-3">
                  Wiew
                </th>
                <th scope="col" className="px-5 py-3">
                  Actions
                </th>
              </tr>
              </thead>
              <tbody className="mt-4 w-full min-w-max table-auto text-left">
                {
                  error && (
                    <p className="m-20 text-red-300 text-2xl">
                      Fetch Data : {error}
                    </p>
                  )
                }
                {
                  loading && (
                    <p className="m-20 text-red-300 text-2xl">
                      Fetch Data : {loading}
                    </p>
                  )
                }
                {
                  datas && datas.length && datas.map((product, index) => (
                    <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">{product.title}</td>
                      <td className="px-6 py-4">{product.price}</td>
                      <td className="px-6 py-4">{product.discountPrice}</td>
                      <td className="px-6 py-4">{product.rating}</td>
                      <td className="px-6 py-4">{product.stock}</td>
                      <td className="px-6 py-4">{product.category}</td>
                      <td className="px-6 py-4">
                        <div
                          className="h-10 w-10 rounded-full cursor-pointer "
                          style={{ backgroundColor: product.color }}
                          onClick={() => copyColorCode(product.color)}
                        ></div>
                      </td>
                      <td className="p-3">
                      <img
                        className="h-12 w-20 object-cover rounded-sm"
                        src={product.image}
                        alt={product.title}
                      />
                      </td>
                      <td className="px-2 py-4 ">{moment(product?.create_at).fromNow()}</td>

                    </tr>
                  ))
                }
              </tbody>

            </table>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home