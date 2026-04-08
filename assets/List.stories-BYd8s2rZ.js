"use client";import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./useId-HrPGyhy9.js";import{t as i}from"./categoryItems-Cwhajgr8.js";import{t as a}from"./Database-C8JnsQxt.js";import{t as o}from"./Package-Dd2nNd-s.js";import{t as s}from"./TeddyBear-BOWHyBXM.js";import{t as c}from"./Typography-DBWZN96y.js";import{t as l}from"./ListItem-DAJg57C2.js";import{t as u}from"./ContextMenu-BispZrd8.js";import{t as d}from"./List-BNjZuxCc.js";import{t as f}from"./Section-DYB-4Xyp.js";import{t as p}from"./brreg-DjEOhzdy.js";import{t as m}from"./skatt-Blgau9wG.js";import{t as h}from"./nav-DQd4-ybe.js";var g=e(t()),_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},v=(0,g.forwardRef)((e,t)=>{var{title:n,titleId:i}=e,a=_(e,[`title`,`titleId`]);let o=r();return o=n?i||`title-`+o:void 0,g.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,width:`1em`,height:`1em`,fill:`none`,viewBox:`0 0 24 24`,focusable:!1,role:`img`,ref:t,"aria-labelledby":o},a),n?g.createElement(`title`,{id:o},n):null,g.createElement(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M18.283 18.516a20 20 0 0 1-1.663-4.076l3.91-3.91a2.871 2.871 0 1 0-4.06-4.06l-1.228 1.227a241 241 0 0 1-.48-2.684l-.017-.103-.005-.033-.012-.059-.001-.002v-.003l-.003-.009-.007-.025-.024-.083a4.651 4.651 0 0 0-.495-1.094C13.831 3.016 13.134 2.25 12 2.25H9c-1.085 0-1.9.711-2.377 1.256-.236.27-.423.538-.554.744H4A1.75 1.75 0 0 0 2.25 6v1.94a3.31 3.31 0 0 0 3.31 3.31h2.014l-.036.183c-.135.68-.31 1.63-.468 2.708-.313 2.134-.578 4.845-.314 6.952a.75.75 0 0 0 .744.657H19a.75.75 0 0 0 .576-1.23l-.002-.003-.017-.02q-.023-.03-.071-.092-.098-.125-.277-.38c-.236-.34-.565-.848-.926-1.51M7.171 5.336a.75.75 0 0 1-.671.414H4a.25.25 0 0 0-.25.25v1.94a1.81 1.81 0 0 0 1.81 1.81H8.5a.75.75 0 0 1 .73.919v.003l-.003.013-.012.053-.045.207a55.164 55.164 0 0 0-.615 3.414c-.277 1.88-.494 4.093-.373 5.891h.507l6.261-6.261a22 22 0 0 1-.185-.842 359 359 0 0 1-.945-4.892c-1.019.447-2.194.627-3.138.346-.587-.174-1.132-.545-1.416-1.183-.276-.622-.242-1.36.023-2.155a.75.75 0 0 1 1.423.474c-.196.587-.146.912-.075 1.072.064.143.197.273.471.354.584.173 1.553.036 2.432-.438a196 196 0 0 1-.256-1.46l-.018-.104-.008-.03a3.15 3.15 0 0 0-.331-.734c-.258-.412-.56-.647-.927-.647H9c-.415 0-.85.289-1.248.744a4.7 4.7 0 0 0-.576.832zm9.796 13.898c.21.386.412.726.594 1.016h-6.75l4.608-4.609a21.5 21.5 0 0 0 1.548 3.593M19.47 9.47l-3.26 3.259c-.24-1.205-.451-2.292-.633-3.246L17.53 7.53a1.371 1.371 0 0 1 1.94 1.94`,clipRule:`evenodd`}))}),y=n(),b={title:`List/List`,component:d,tags:[`autodocs`],parameters:{}},x=()=>(0,y.jsxs)(d,{children:[(0,y.jsx)(l,{icon:a,label:`Item 1`,linkIcon:!0}),(0,y.jsx)(l,{icon:v,label:`Item 2`,linkIcon:!0}),(0,y.jsx)(l,{icon:s,label:`Item 3`,linkIcon:!0})]}),S=[{title:`Klage på myndighetenes fastsetting av formues- og inntektsskatt`,owner:m},{title:`Bekreftelse fra konkursregisteret`,owner:p},{title:`Inntektsmelding`,owner:h}],C=[{name:`Per Egil Ahlsen`,role:`Daglig leder`},{name:`Vidar Bahus`,role:`Styremedlem`,badge:{color:`company`,theme:`base`,label:`Deg selv`}},{name:`Niklas Castro`,role:`Regnskap`}],w=()=>(0,y.jsx)(d,{color:`neutral`,children:C.map((e,t)=>(0,y.jsx)(l,{size:`md`,icon:{name:e.name},badge:e?.badge,title:e.name,description:e.role,variant:`default`},t))}),T=()=>(0,y.jsx)(d,{color:`neutral`,children:S.map((e,t)=>(0,y.jsx)(l,{size:`md`,icon:e.owner,title:e.title,description:e.owner.name,variant:`subtle`},t))}),E=()=>(0,y.jsx)(d,{color:`company`,children:i?.slice(0,3).map((e,t)=>(0,y.jsx)(l,{size:`md`,icon:{svgElement:e.icon,theme:`tinted`},title:e.title,description:e?.items?.length+` tjenester`},t))}),D=()=>{let[e,t]=(0,g.useState)(null),n=e=>{t(t=>t===e?null:e)},r={a1b1:!0,a1b2:!0,a2b1:!0};return(0,y.jsx)(d,{children:i.map((e,t)=>{let n=`a`+(t+1),i=e.items?.map((e,t)=>{let i=n+`b`+(t+1);return{...e,id:i,color:r[i]?`company`:`neutral`}}),a=i?.length||0,o=i?.filter(e=>e.color===`company`).length||0,s=o?`${o} av ${a}`:`Gi tilgang`;return{...e,id:n,color:o?`company`:`neutral`,badge:{theme:`surface`,label:s},items:i}}).slice(0,3).map(t=>{let r=t.id===e;return(0,y.jsx)(l,{color:t.color,icon:{svgElement:t.icon,theme:`tinted`},size:`md`,title:t.title,badge:{theme:`surface`,label:t.badge.label},description:r?``:t?.items?.length+` tjenester`,collapsible:!0,expanded:r,onClick:()=>n(t.id),as:`button`,ariaLabel:t.title,children:r&&(0,y.jsxs)(f,{padding:4,spacing:4,children:[(0,y.jsx)(c,{children:`Beskrivelse av område. Lorem ipsum dolor.`}),(0,y.jsx)(d,{children:t?.items?.map((e,t)=>(0,y.jsx)(l,{icon:o,size:`xs`,color:e.color,variant:`subtle`,title:e.title,controls:(0,y.jsx)(u,{id:`menu`+t,items:[{id:`1`,title:`Option 1`},{id:`2`,title:`Option 2`},{id:`3`,title:`Option 3`}]})},`c`+t))})]})},t.id)})})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <List>
      <ListItem icon={DatabaseIcon} label="Item 1" linkIcon />
      <ListItem icon={DogHarnessIcon} label="Item 2" linkIcon />
      <ListItem icon={TeddyBearIcon} label="Item 3" linkIcon />
    </List>;
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <List color="neutral">
      {people.map((item, index) => <ListItem size="md" key={index} icon={{
      name: item.name
    }} badge={item?.badge} title={item.name} description={item.role} variant="default" />)}
    </List>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <List color="neutral">
      {services.map((item, index) => <ListItem size="md" key={index} icon={item.owner} title={item.title} description={item.owner.name} variant="subtle" />)}
    </List>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <List color="company">
      {categoryItems?.slice(0, 3).map((item, index) => <ListItem size="md" key={index} icon={{
      svgElement: item.icon,
      theme: 'tinted'
    } as IconProps} title={item.title} description={item?.items?.length + ' tjenester'} />)}
    </List>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const onToggle = (id: string) => {
    setExpandedId(prevState => prevState === id ? null : id);
  };
  const access: Record<string, boolean> = {
    a1b1: true,
    a1b2: true,
    a2b1: true
  };
  const items = categoryItems.map((item, aIndex) => {
    const aId = 'a' + (aIndex + 1);
    const bItems = item.items?.map((subItem, bIndex) => {
      const bId = aId + 'b' + (bIndex + 1);
      return {
        ...subItem,
        id: bId,
        color: access[bId] ? 'company' : 'neutral'
      };
    });
    const total = bItems?.length || 0;
    const count = bItems?.filter(subItem => subItem.color === 'company').length || 0;
    const label = count ? \`\${count} av \${total}\` : 'Gi tilgang';
    return {
      ...item,
      id: aId,
      color: count ? 'company' : 'neutral',
      badge: {
        theme: 'surface',
        label
      },
      items: bItems
    };
  }).slice(0, 3);
  return <List>
      {items.map(item => {
      const expanded = item.id === expandedId;
      return <ListItem color={item.color as ListItemColor} icon={{
        svgElement: item.icon,
        theme: 'tinted'
      } as IconProps} size="md" title={item.title} badge={{
        theme: 'surface',
        label: item.badge.label
      }} description={expanded ? '' : item?.items?.length + ' tjenester'} collapsible expanded={expanded} onClick={() => onToggle(item.id)} as="button" ariaLabel={item.title as string} key={item.id}>
            {expanded && <Section padding={4} spacing={4}>
                <Typography>Beskrivelse av område. Lorem ipsum dolor.</Typography>
                <List>
                  {item?.items?.map((child, index) => <ListItem key={'c' + index} icon={PackageIcon} size="xs" color={child.color as ListItemColor} variant="subtle" title={child.title} controls={<ContextMenu id={'menu' + index} items={[{
              id: '1',
              title: 'Option 1'
            }, {
              id: '2',
              title: 'Option 2'
            }, {
              id: '3',
              title: 'Option 3'
            }]} />} />)}
                </List>
              </Section>}
          </ListItem>;
    })}
    </List>;
}`,...D.parameters?.docs?.source}}};var O=[`Default`,`ListOfPeople`,`ListOfServices`,`ListOfCategories`,`MultilevelList`];export{x as Default,E as ListOfCategories,w as ListOfPeople,T as ListOfServices,D as MultilevelList,O as __namedExportsOrder,b as default};