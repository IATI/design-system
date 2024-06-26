import React from "react";

export const TokensTable = ({ tokens }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>CSS Custom Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([name, value], i) => (
          <tr key={i}>
            <td>
              <code>--{name}</code>
            </td>
            <td>
              <code>{value}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
