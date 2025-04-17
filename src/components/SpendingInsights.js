export default function SpendingInsights({ data }) {
    const overBudget = data.filter((item) => item.actual > item.budget);
  
    return (
      <div>
        <h2>Spending Insights</h2>
        {overBudget.length > 0 ? (
          <ul>
            {overBudget.map((item) => (
              <li key={item.category}>
                Over budget in {item.category} by ${item.actual - item.budget}
              </li>
            ))}
          </ul>
        ) : (
          <p>All spending is within budget!</p>
        )}
      </div>
    );
  }