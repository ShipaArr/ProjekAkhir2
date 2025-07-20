export default function useAdminData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost/.../admin_endpoint.php', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('user')}`
        }
      });
      setData(await res.json());
    };

    fetchData();
  }, []);

  return data;
}