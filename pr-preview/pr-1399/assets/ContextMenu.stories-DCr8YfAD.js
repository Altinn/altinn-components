import{a7 as t}from"./iframe-DJfn40-D.js";import{S as b}from"./ArrowRedo-CDeqVFhP.js";import{S as v}from"./EyeClosed-B15_RZV2.js";import{S as I}from"./Archive-DIb6mTzI.js";import{S as k}from"./Trash-QlCQ_OLM.js";import{S as w}from"./ClockDashed-B53QxFKY.js";import{C as n}from"./ContextMenu-CaiQMd7K.js";import{i as l}from"./inboxSearchResults-C4UZD6UG.js";import{S as u}from"./TeddyBear-CXQlC1w5.js";import{L as x}from"./List-BVuaqhLj.js";import{D as d}from"./DialogListItem-ClODTATb.js";import{L as g}from"./ListItem-BIpR7yvi.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CsyOSzoH.js";import"./Dropdown-D88HD4zP.js";import"./SearchField-BCijVFY-.js";import"./MagnifyingGlass-DE-iQbgW.js";import"./FieldBase-D1U1BxD2.js";import"./Typography-XfwuV3u8.js";import"./useHighlightedText-Bup2uSoT.js";import"./Field-Dse2Pgmw.js";import"./Label-BgUgSPLd.js";import"./Input-1D4-_m0T.js";import"./useMenu-CxHWIKXS.js";import"./MenuListItem-BFRz4ttp.js";import"./MenuListDivider-D98MnUWk.js";import"./MenuListHeading-DOsHnXss.js";import"./MenuItem-BcYTRISI.js";import"./ItemMedia-KuTtS6so.js";import"./Avatar-DCvRzqvr.js";import"./AvatarGroup-3CBvuGfY.js";import"./Checkmark-DXbNx-Gj.js";import"./ItemLabel-GD3MG7Wk.js";import"./Heading-DGmFcP6K.js";import"./ItemControls-fheO_qcA.js";import"./Badge-DwpsZD4L.js";import"./Tooltip-D_0KZq3E.js";import"./ChevronRight-DB6kCZkt.js";import"./InformationSquare-TILYX_Pd.js";import"./MenuElipsisHorizontal-BQYr1o0J.js";import"./dialogs-DruI2Ks2.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BAqSM4VE.js";import"./AttachmentList-CshSDg8F.js";import"./AttachmentLink-BqVVl8dc.js";import"./File-BmxUoSyd.js";import"./Section-DRGrLW1j.js";import"./Flex-BuCXAFdl.js";import"./TransmissionList-b9tftb8P.js";import"./Transmission-BBOB8F8h.js";import"./SeenByLog-DMyC3DbY.js";import"./SeenByLogItem-SJAf42rd.js";import"./Byline-BukN8tD1.js";import"./SeenByLogButton-CrJmq17u.js";import"./Divider-lqGtvfjN.js";import"./DialogActions-DjXXm_dM.js";import"./ButtonGroupDivider-B1RwbsMj.js";import"./ChevronUp-CDdzZBKT.js";import"./ChevronDown-D_48qJ0I.js";import"./DropdownBase-DYs-UXBI.js";import"./useClickOutside-tVZZKi4y.js";import"./ButtonGroup-HFpGrSBK.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BZeziJXo.js";import"./ItemLink-DnwAIVP3.js";import"./DialogByline-CeQsDFva.js";import"./DialogMetadata-DGQbiT4r.js";import"./DialogStatus-CJG1df7D.js";import"./Paperclip-OMBVgScI.js";import"./Files-CafoyZRe.js";import"./MetaBase-fRyecMZw.js";import"./MetaItem-BQns-zGw.js";import"./ProgressIcon-CUrDOUVY.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Gt as __namedExportsOrder,zt as default};
