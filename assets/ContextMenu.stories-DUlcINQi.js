import{a7 as t}from"./iframe-pmb13xcr.js";import{S as b}from"./ArrowRedo-CvXh4W10.js";import{S as v}from"./EyeClosed-Bh40c4A_.js";import{S as I}from"./Archive-D80U9MMR.js";import{S as k}from"./Trash-IxXQM3-V.js";import{S as w}from"./ClockDashed-BY8sOjQH.js";import{C as n}from"./ContextMenu-CkaQH0Em.js";import{i as l}from"./inboxSearchResults-BSNUvMN3.js";import{S as u}from"./TeddyBear-DzLYnAqJ.js";import{L as x}from"./List-7Zz6NyrJ.js";import{D as d}from"./DialogListItem-Dumnnsws.js";import{L as g}from"./ListItem-DeYVBNax.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CLuQSoQG.js";import"./Dropdown-BPuWmM11.js";import"./SearchField-xzT30cQx.js";import"./MagnifyingGlass-HRL7caCa.js";import"./FieldBase-DlkZCCjW.js";import"./Typography-BgUhg-DC.js";import"./useHighlightedText-By0gZF-u.js";import"./Field-Dm0MSPIi.js";import"./Label-CxwvdH9w.js";import"./Input-CJNvWYoB.js";import"./useMenu-PFiIjJ-b.js";import"./MenuListItem-DW-1hJGg.js";import"./MenuListHeading-B2QtO_LB.js";import"./MenuItem-D_bFc04X.js";import"./ItemMedia-BGgA1RRu.js";import"./Avatar-DgFMZdvt.js";import"./AvatarGroup-C5Tz0kQR.js";import"./Checkmark-Cm7hyVD6.js";import"./ItemLabel-0x089RNk.js";import"./Heading-sU40TroH.js";import"./ItemControls-CCuuzoug.js";import"./Badge-CDoJNvMh.js";import"./Tooltip-BV9R0mmr.js";import"./ChevronRight-BcL3woie.js";import"./index-B1Y0FrCw.js";import"./InformationSquare-Bin60tyG.js";import"./MenuElipsisHorizontal-BdVaNuRc.js";import"./dialogs-C5XqCeZQ.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-COEF4lCu.js";import"./AttachmentList-CnGzbpok.js";import"./AttachmentLink-Cm54wvjm.js";import"./File-BPEQ7dJC.js";import"./Section-0UMzqVbn.js";import"./Flex-Bo48iBpz.js";import"./TransmissionList-BUMWIcZJ.js";import"./Transmission-C4nzYuYj.js";import"./SeenByLog-BceB2Mep.js";import"./SeenByLogButton-DAktTQAU.js";import"./SeenByLogItem-C0xxPpJb.js";import"./Byline-BOyDTWco.js";import"./Divider-LyAC-Ayz.js";import"./DialogActions-MN_pv1Yc.js";import"./ButtonGroupDivider-rjyiDHvV.js";import"./ChevronUp-DD3z1ZBF.js";import"./ChevronDown-7NsihGJj.js";import"./DropdownBase-BpVCfchw.js";import"./useClickOutside-CoPJaRX0.js";import"./ButtonGroup-DvNffpdA.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DNBWN9Yd.js";import"./ItemLink-B34a5swl.js";import"./DialogByline-TPpmtocF.js";import"./DialogMetadata-C_PEuPBB.js";import"./DialogStatus-CxlDmZ2c.js";import"./MetaItem-D1st4MYi.js";import"./ProgressIcon-DbML78xP.js";import"./Paperclip-DcB5Ctck.js";import"./Files-f2SbFh9e.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await r(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await r(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,zt as __namedExportsOrder,Yt as default};
