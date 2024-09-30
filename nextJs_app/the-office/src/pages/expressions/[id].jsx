// data
import expressions from '../../data/expressions.json';

export async function getStaticPaths() {
  const paths = expressions.map((expression) => ({
    params: { id: expression.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const expression = expressions.find((exp) => exp.id === parseInt(id));

  if (!expression) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      expression,
    },
  };
}
