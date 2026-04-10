import{j as t}from"./iframe-DRbAvM8B.js";import{S as b}from"./ArrowRedo-Dg6IFWSr.js";import{S as v}from"./EyeClosed-CCBARXxq.js";import{S as I}from"./Archive-Can2FccB.js";import{S as k}from"./Trash-D6ryZk36.js";import{S as w}from"./ClockDashed-BWgjUcJM.js";import{S as l}from"./TeddyBear-BCnTbEFR.js";import{i as u}from"./inboxSearchResults-MeT1cBcn.js";import{C as r}from"./ContextMenu-kHX2Z4TH.js";import{L as x}from"./List-DqiN2axT.js";import{L as d}from"./ListItem-B48A-xDW.js";import{D as g}from"./DialogListItem-Bdtiye4W.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-p3Uu13R2.js";import"./dialogs-DK_eewzq.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-RY24ZVNm.js";import"./AttachmentList-CgXYDtN7.js";import"./AttachmentLink-DfxKpmwB.js";import"./Icon-BB196-C1.js";import"./index-Dpt5RUeZ.js";import"./Skeleton-C6w0Fovi.js";import"./Badge-B0bOgxTq.js";import"./Section-eG7NPuGp.js";import"./Flex-DfEZbiAr.js";import"./Heading-aiLobBhZ.js";import"./useHighlightedText-DaUYVTi5.js";import"./TransmissionList-nJSeSEbf.js";import"./Transmission-wwaOs5R_.js";import"./Typography-Da6zx1kt.js";import"./SeenByLog-DrDjFhxR.js";import"./SeenByLogButton-DgY8w5_v.js";import"./Button-DXRH0CtL.js";import"./button-DB6SpB_q.js";import"./use-merge-refs-BRHMCtFk.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-BZTkgKpW.js";import"./Avatar-DHw0Umd5.js";import"./SeenByLogItem-CS7bTOl-.js";import"./Byline-DvIPHZak.js";import"./Divider-CSQOdO1f.js";import"./DialogActions-B4VjUhDt.js";import"./ButtonGroupDivider-Bl0yWe10.js";import"./ChevronUp-DFhYQLlv.js";import"./ChevronDown-D8-ttEmo.js";import"./DropdownBase-Agin9rKC.js";import"./useClickOutside-DcBMNI1Q.js";import"./ButtonGroup-r6m6YA7P.js";import"./SearchField-Q4hKdicz.js";import"./MagnifyingGlass-Byb6dLEO.js";import"./XMark-BeNK6Eym.js";import"./FieldBase-_93TCpK5.js";import"./Label-Zr8dB_9-.js";import"./index-Vs8aUpKw.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./MenuListItem-CLLuPs6D.js";import"./MenuListHeading-DYidFrGe.js";import"./MenuItem-GZbX5NAK.js";import"./ItemMedia-DLqoeXZM.js";import"./Checkmark-BwvmX3W_.js";import"./ChevronRight-BIwAZUpi.js";import"./useMenu-BNYBCPCQ.js";import"./InformationSquare-Lr6VUhuh.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-OmQMIEvc.js";import"./Dropdown-VBO2OC6w.js";import"./Tooltip-CJtJf-6I.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-Rg7tFK6D.js";import"./DialogByline-x2ym7gET.js";import"./DialogMetadata-BvnX4OhB.js";import"./DialogStatus-F1r7I7Tj.js";import"./Hourglass-D2MD5QDU.js";import"./MetaProgress-BeWB-lF7.js";import"./MetaItemLabel-CGC4jvlK.js";import"./ProgressIcon-DaSFbIOK.js";import"./MetaItem-gcZAnx0_.js";import"./MetaTimestamp-uO3ut3UU.js";import"./Paperclip-BUnfw_md.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  return <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
  const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
  return <List>
      <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
