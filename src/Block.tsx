import React from "react";

type BlockProps = {
  hash: string;
  height: number;
  transactions: number;
  duration?: number;
  usage: number;
  max: number;
  difficulty: number;
  reward: number;
};

export default function Block(props: BlockProps) {
  if (props.duration) {
    return (
      <>
        <div className="block">
          <h3>Block {props.hash}</h3>
          <h4 className="prop">Block Height: <h5 className="val">{props.height}</h5></h4><br />
          <h4 className="prop">Transactions: <h5 className="val">{props.transactions}</h5></h4><br />
          <h4 className="prop">Duration: <h5 className="val">{props.duration}</h5></h4><br />
          <h4 className="prop">Usage: <h5 className="val">{props.usage} / {props.max}</h5></h4><br />
          <h4 className="prop">Difficulty: <h5 className="val">{props.difficulty}</h5></h4><br />
          <h4 className="prop">Reward: <h5 className="val">{props.reward}</h5></h4><br />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="block">
		<h3>Block {props.hash}</h3>
          <h4 className="prop">Block Height: <h5 className="val">{props.height}</h5></h4><br />
          <h4 className="prop">Transactions: <h5 className="val">{props.transactions}</h5></h4><br />
          <h4 className="prop">Usage: <h5 className="val">{props.usage} / {props.max}</h5></h4><br />
          <h4 className="prop">Difficulty: <h5 className="val">{props.difficulty}</h5></h4><br />
          <h4 className="prop">Reward: <h5 className="val">{props.reward}</h5></h4><br />
        </div>
      </>
    );
  }
}
