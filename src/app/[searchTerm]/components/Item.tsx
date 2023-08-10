import Image from "next/image";
import Link from "next/link";

type Props = {
  result: Result;
};

import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
} from "../../components/MaterialTailwind";

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div>
      <Typography variant="h6" color="white">
        {result.title}
      </Typography>
      <Typography variant="small" color="white" className="font-normal">
        {result.extract}
      </Typography>
    </div>
  );

  const content = result?.thumbnail?.source ? (
    <div>
      <List className="m-4 max-w-lg">
        <Link
          href={`https://fr.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
        >
          <ListItem className="flex flex-row gap-4 hover:bg-surface-600">
            <ListItemPrefix className="flex flex-col justify-center">
              <Avatar
                variant="square"
                alt={result.title}
                src={result.thumbnail.source}
                width={result.thumbnail.width}
                height={result.thumbnail.height}
                loading="lazy"
              />
            </ListItemPrefix>
            {itemTextCol}
          </ListItem>
        </Link>
      </List>
      <hr className="h-px bg-surface-700 border-0 dark:bg-gray-700" />
    </div>
  ) : (
    <div>
      <List className="ml-16 max-w-lg">
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
        >
          <ListItem className="hover:bg-surface-600">{itemTextCol}</ListItem>
        </Link>
      </List>
      <hr className="h-px bg-surface-700 border-0 dark:bg-gray-700" />
    </div>
  );

  return content;
}
