import{a7 as t}from"./iframe-CENvAP26.js";import{S as b}from"./ArrowRedo-Mw8h0TKz.js";import{S as v}from"./EyeClosed-BR7X0y0k.js";import{S as I}from"./Archive-De4Ormwu.js";import{S as k}from"./Trash-Cs7D8kti.js";import{S as w}from"./ClockDashed-CNykKsxK.js";import{C as i}from"./ContextMenu-AeMGqdrL.js";import{i as l}from"./inboxSearchResults-D77rNjs0.js";import{S as u}from"./TeddyBear-tu8MLGRj.js";import{L as x}from"./List-BoqDu_U2.js";import{D as d}from"./DialogListItem-x7dMEOUm.js";import{L as g}from"./ListItem-DghPxNCy.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-BbdnPNgS.js";import"./Dropdown-BZVY_4Wm.js";import"./SearchField-B76VS5jy.js";import"./MagnifyingGlass-DDkWwcsn.js";import"./FieldBase-IIcWSE0k.js";import"./Typography-BK5AylHP.js";import"./useHighlightedText-BwOLK-i3.js";import"./Field-oHEtcERA.js";import"./Label-N53R6xsN.js";import"./Input-CMkEMAO8.js";import"./useMenu-DmwlujsT.js";import"./MenuListItem-BT-iZ3cq.js";import"./MenuListHeading-BD0rgLCP.js";import"./MenuItem-Fa6rC5wV.js";import"./ItemMedia-C5TE1h6m.js";import"./Avatar-D1pW8xSr.js";import"./AvatarGroup-CTCyh_uW.js";import"./Checkmark-D1ifpvt_.js";import"./ItemLabel-CqdC7zrv.js";import"./Heading-mra_L4pQ.js";import"./ItemControls-DaWh-3zk.js";import"./Badge-DDGgDt_B.js";import"./Tooltip-B6qNZOKm.js";import"./ChevronRight-CqCnB5Zg.js";import"./index-BzTqrnLh.js";import"./InformationSquare-DfDfuKua.js";import"./MenuElipsisHorizontal-CQDhRMvW.js";import"./dialogs-CwvWonpa.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CyzMZ89w.js";import"./AttachmentList-DKBdki1s.js";import"./AttachmentLink-RRvZSr-o.js";import"./File-CvY0jx6Y.js";import"./Section-Dfl51lKI.js";import"./Flex-yTAvUoR1.js";import"./TransmissionList-OELd3qWw.js";import"./Transmission-hMEIMgOT.js";import"./SeenByLog-DD7NYZjk.js";import"./SeenByLogButton-Dn1hW3zP.js";import"./SeenByLogItem-CGUYjSjh.js";import"./Byline-T8ktPO6_.js";import"./Divider-Ci72vZ2L.js";import"./DialogActions-9Uanj7ef.js";import"./ButtonGroupDivider-1X3Nwv0w.js";import"./ChevronUp-BFUCM25K.js";import"./ChevronDown-88nFsQYK.js";import"./DropdownBase-CT_lzEhN.js";import"./useClickOutside-DOyOIDpC.js";import"./ButtonGroup-C4l5taXG.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BmDbJFS_.js";import"./ItemLink-DEb6WuQs.js";import"./DialogByline-CvArLmHf.js";import"./DialogMetadata-CnUCKKnT.js";import"./DialogStatus-BL-vv00c.js";import"./MetaItem-CYnXiPAK.js";import"./ProgressIcon-BXjGusjk.js";import"./Paperclip-C8W8HItg.js";import"./Files-C7R3QVMS.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,zt as __namedExportsOrder,Yt as default};
