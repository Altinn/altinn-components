import{a7 as t}from"./iframe-DymAqe7-.js";import{S as b}from"./ArrowRedo-D8ys3S6l.js";import{S as v}from"./EyeClosed-BRmN-t7N.js";import{S as I}from"./Archive-B6hnNlJU.js";import{S as k}from"./Trash-440SdK96.js";import{S as w}from"./ClockDashed-yyabM1jF.js";import{C as n}from"./ContextMenu-B6RF4Vop.js";import{i as l}from"./inboxSearchResults-CPdvlZMU.js";import{S as u}from"./TeddyBear-DzB3TL4z.js";import{L as x}from"./List-BFVNMUvv.js";import{D as d}from"./DialogListItem-DA8KSheG.js";import{L as g}from"./ListItem-Bmm1NlzL.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-DAEYpjlT.js";import"./Dropdown-Cp-0Evcf.js";import"./SearchField-BGWHdZv0.js";import"./MagnifyingGlass-DYyWgrew.js";import"./FieldBase-CV5Nsw3m.js";import"./Typography-CpmuPi_2.js";import"./useHighlightedText-CHgJbocK.js";import"./Field-Ct7nmimk.js";import"./Label-jxhD3VW5.js";import"./Input-XXqZV2PD.js";import"./useMenu-B3cy-uAB.js";import"./MenuListItem-tD-sg5OP.js";import"./MenuListDivider-D_6Pn6hY.js";import"./MenuListHeading-D0t38-BK.js";import"./MenuItem-Q0-LXmKI.js";import"./ItemMedia-BNXDJXQ4.js";import"./Avatar--eqxbK2x.js";import"./AvatarGroup-C7VtBu50.js";import"./Checkmark-BfyIm5TX.js";import"./ItemLabel-D1_6NRfu.js";import"./Heading-D0_eZ5cX.js";import"./ItemControls-DPpG0bqy.js";import"./Badge-FB3xbQux.js";import"./Tooltip-BfF0ydp0.js";import"./ChevronRight-DBeZxa-Y.js";import"./InformationSquare-DzVIiFVQ.js";import"./MenuElipsisHorizontal-DLk1idta.js";import"./dialogs-gsretprm.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BnerkPIJ.js";import"./AttachmentList-DE-UAyEp.js";import"./AttachmentLink-D1bo9jx8.js";import"./File-wv0JkgCq.js";import"./Section-VcJzw9XS.js";import"./Flex-SVKdN4dv.js";import"./TransmissionList-DZfKd6Mn.js";import"./Transmission-CcGmDLNZ.js";import"./SeenByLog-bwglEae5.js";import"./SeenByLogItem-BP20U67H.js";import"./Byline-wvHK-UuT.js";import"./SeenByLogButton-DInHZDR2.js";import"./Divider-5puRdG7X.js";import"./DialogActions-iiFw16lh.js";import"./ButtonGroupDivider-CV7n4r5d.js";import"./ChevronUp-DmvfmoSK.js";import"./ChevronDown-D0JeQuoP.js";import"./DropdownBase-9nCCiT-S.js";import"./useClickOutside-CLQiz1W3.js";import"./ButtonGroup-Bmdo2OtQ.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CCp86b5G.js";import"./ItemLink-BckblcU7.js";import"./DialogByline-B-LnI7Ma.js";import"./DialogMetadata-biNdr44O.js";import"./DialogStatus-CdCYnJjl.js";import"./Paperclip-f_jLHWkp.js";import"./Files-WYp-U0OQ.js";import"./MetaBase-kHGXUzgN.js";import"./MetaItem-CMZ9fF7J.js";import"./ProgressIcon-CVYEOZ2f.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
